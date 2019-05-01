package com.chinasoft.lgh.iam.core.service.impl;

import com.alibaba.fastjson.JSON;
import com.chinasoft.lgh.iam.core.config.Constants;
import com.chinasoft.lgh.iam.core.exception.ExceptionCode;
import com.chinasoft.lgh.iam.core.exception.IamException;
import com.chinasoft.lgh.iam.core.model.MUser;
import com.chinasoft.lgh.iam.core.pojo.user.IamPageRequest;
import com.chinasoft.lgh.iam.core.pojo.user.UserInfo;
import com.chinasoft.lgh.iam.core.repo.UserRepo;
import com.chinasoft.lgh.iam.core.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.util.Base64Utils;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    private UserRepo userRepo;

    @Override
    public MUser validateToken(String token) {
        if (StringUtils.isEmpty(token)) {
            return null;
        }
        try {
            MUser user = JSON.parseObject(Base64Utils.decodeFromString(token), MUser.class);
            if (user.isLogged() && System.currentTimeMillis() < user.getLoginTime() + user.getExpireTime()) {
                return user;
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }

    }

    @Override
    public MUser login(UserInfo userParam) {
        if (StringUtils.isEmpty(userParam.getName()) || StringUtils.isEmpty(userParam.getPassword())) {
            throw new IamException(ExceptionCode.INVALID_PARAM);
        }
        MUser user = userRepo.findByNameAndDeleted(userParam.getName(), false);
        if (user == null) {
            throw new IamException(ExceptionCode.USER_NOT_FOUND);
        }
        String password = user.getPassword();
        if (password.equals(Base64Utils.encodeToString(userParam.getPassword().getBytes(Constants.CHARSET)))) {
            user.setLogged(true);
            user.setLoginTime(System.currentTimeMillis());
            return userRepo.save(user);
        } else {
            throw new IamException(ExceptionCode.LOGIN_FAILED);
        }
    }

    @Override
    public MUser register(UserInfo userInfo) {
        MUser mUser = userRepo.findByNameAndDeleted(userInfo.getName(), false);
        if (mUser != null) {
            throw new IamException(ExceptionCode.USER_READY_EXIST);
        }
        mUser = new MUser(userInfo.getName(), Base64Utils.encodeToString(userInfo.getPassword().getBytes(Constants.CHARSET))
                , userInfo.getEmail(), userInfo.getPhone(), userInfo.getType());
        mUser.setLogged(true);
        mUser.setLoginTime(System.currentTimeMillis());
        return userRepo.save(mUser);
    }

    @Override
    public MUser updateBasicInfo(UserInfo userInfo) {
        if (StringUtils.isEmpty(userInfo.getName())){
            throw new IamException(ExceptionCode.USER_NOT_FOUND);
        }
        MUser user = userRepo.findByNameAndDeleted(userInfo.getName(), false);
        if (user == null){
            throw new IamException(ExceptionCode.USER_NOT_FOUND);
        }
        if (!StringUtils.isEmpty(userInfo.getEmail())){
            user.setEmail(userInfo.getEmail());
        }
        if (!StringUtils.isEmpty(userInfo.getPhone())){
            user.setPhone(userInfo.getPhone());
        }
        return userRepo.save(user);
    }

    @Override
    public Page<MUser> getUserList(IamPageRequest request) {
        return userRepo.findAllByDeleted(false, PageRequest.of(request.getPage(), request.getSize()));
    }
}
