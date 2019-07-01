package com.chinasoft.lgh.iam.core.repo;

import com.chinasoft.lgh.iam.core.model.MUser;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserRepo extends IamRepo<MUser, String> {
    MUser findByNameAndDeleted(String name, boolean deleted);

    Page<MUser> findAllByDeleted(boolean deleted, Pageable pageable);

    Page<MUser> findAllByDeleted(boolean deleted, Example<MUser> example, Pageable pageable);
}
