package com.chinasoft.lgh.iam.core.model;

import com.chinasoft.lgh.iam.core.config.Constants;
import com.chinasoft.lgh.iam.core.pojo.UserType;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users")
public class MUser {

    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private String password;
    private String email;
    private String phone;
    private UserType type;
    
    private long expireTime = Constants.ONE_DAY_MILLISECONDS;
    private long loginTime;
    private String loginDomain;

    private boolean locked;
    private boolean logged;

    private boolean deleted;

    @CreatedDate
    private long createdOn;

    @LastModifiedDate
    private long updatedOn;

    public MUser() {
    }

    public MUser(String name, String password, String email, String phone, UserType type) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.type = type;
    }


}
