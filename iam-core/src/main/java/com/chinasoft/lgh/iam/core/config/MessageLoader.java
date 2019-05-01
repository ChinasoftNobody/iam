package com.chinasoft.lgh.iam.core.config;

import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class MessageLoader {
    @Resource
    private MessageSource messageSource;

    public String get(String code) {
        return messageSource.getMessage(code, null, null);
    }
}
