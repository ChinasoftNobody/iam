package com.chinasoft.lgh.iam.core.pojo.user;

import lombok.Data;

@Data
public class UserPageRequest {
    private int size;
    private int number;
    private String keyword;
}
