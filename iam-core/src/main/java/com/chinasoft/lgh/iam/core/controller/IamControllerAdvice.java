package com.chinasoft.lgh.iam.core.controller;

import com.alibaba.fastjson.JSON;
import com.chinasoft.lgh.iam.core.config.MessageLoader;
import com.chinasoft.lgh.iam.core.exception.ExceptionCode;
import com.chinasoft.lgh.iam.core.exception.IamException;
import com.chinasoft.lgh.iam.core.pojo.Response;
import org.springframework.http.MediaType;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@ControllerAdvice
public class IamControllerAdvice {
    @Resource
    private MessageLoader messageLoader;

    @ExceptionHandler(IamException.class)
    public void error(IamException e, HttpServletResponse response) {
        try {
            response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
            response.getWriter().write(JSON.toJSONString(Response.error(messageLoader.get(e.getCode()))));
        } catch (IOException e1) {
            e1.printStackTrace();
        }
    }

    @ExceptionHandler(Exception.class)
    public void error(Exception e, HttpServletResponse response) {
        try {
            response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
            response.getWriter().write(JSON.toJSONString(Response.error(messageLoader.get(ExceptionCode.SYSTEM_ERROR))));
        } catch (IOException e1) {
            e1.printStackTrace();
        }
    }

    @ExceptionHandler(BindException.class)
    public void error(BindException e, HttpServletResponse response) {
        try {
            StringBuffer stringBuffer = new StringBuffer();
            e.getAllErrors().forEach(objectError -> {
                FieldError fieldError = (FieldError)objectError;
                stringBuffer.append(fieldError.getField()).append(fieldError.getDefaultMessage()).append(System.lineSeparator());
            });
            response.setContentType(MediaType.APPLICATION_JSON_UTF8_VALUE);
            response.getWriter().write(JSON.toJSONString(Response.error(stringBuffer.toString())));
        } catch (IOException e1) {
            e1.printStackTrace();
        }
    }
}
