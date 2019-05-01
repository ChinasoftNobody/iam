package com.chinasoft.lgh.iam.core.controller;

import com.chinasoft.lgh.iam.core.config.Constants;
import com.chinasoft.lgh.iam.core.model.MUser;
import com.chinasoft.lgh.iam.core.pojo.Response;
import com.chinasoft.lgh.iam.core.pojo.user.IamPageRequest;
import com.chinasoft.lgh.iam.core.pojo.user.UserInfo;
import com.chinasoft.lgh.iam.core.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping(value = "/user", headers = {Constants.IAM_TOKEN_HEADER},
        produces = MediaType.APPLICATION_JSON_UTF8_VALUE,
        consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
public class UserOperationController {
    @Resource
    private UserService userService;

    @PostMapping("/update")
    public Response<MUser> update(@RequestBody UserInfo userInfo) {
        MUser user = userService.updateBasicInfo(userInfo);
        return Response.success(user);
    }
    @GetMapping("/userList")
    public Response<Page<MUser>> getUserList(@RequestBody IamPageRequest request){
        return Response.success(userService.getUserList(request));
    }
}
