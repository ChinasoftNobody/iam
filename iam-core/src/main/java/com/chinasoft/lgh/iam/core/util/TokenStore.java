package com.chinasoft.lgh.iam.core.util;

import com.chinasoft.lgh.iam.core.model.MUser;

public class TokenStore {
    public static ThreadLocal<MUser> currentUser = new ThreadLocal<>();

}
