package com.chinasoft.lgh.iam.core.model;

import com.chinasoft.lgh.iam.core.pojo.ServiceType;
import lombok.Data;
import org.springframework.data.annotation.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "service")
public class MService {
    @Id
    private String id;

    private String name;
    private ServiceType type = ServiceType.COMMON;
    private String domain;
    private String home;
    private String target;

    @CreatedBy
    private String authorId;
    @LastModifiedBy
    private String modifierId;
    private boolean deleted;

    @CreatedDate
    private long createdOn;

    @LastModifiedDate
    private long updatedOn;
}
