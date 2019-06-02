package com.chinasoft.lgh.iam.core.service;

import com.chinasoft.lgh.iam.core.model.MUser;
import com.chinasoft.lgh.iam.core.pojo.user.IamPageRequest;
import com.chinasoft.lgh.iam.core.pojo.user.UserInfo;
import org.springframework.data.domain.Page;

public interface UserService {

    MUser validateToken(String token);

    MUser login(UserInfo userParam);

    MUser register(UserInfo userInfo);

    MUser updateBasicInfo(UserInfo userInfo);

    Page<MUser> getUserList(IamPageRequest request);

    void logout(MUser user);
}
