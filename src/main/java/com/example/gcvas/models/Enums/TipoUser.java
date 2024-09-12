package com.example.gcvas.models.Enums;

import java.util.Objects;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum TipoUser {
    
    ADM(1, "ROLE_ADM"),
    SECRETARIA(2, "ROLE_SECRETARIA");

    private Integer code;
    private String description;

    public static TipoUser toEnum(Integer code) {
        if (Objects.isNull(code))
            return null;
    

    for (TipoUser x : TipoUser.values()) {
        if (code.equals(x.getCode()))
            return x;
    }

    throw new IllegalArgumentException("invalid code: " + code);

}

}
