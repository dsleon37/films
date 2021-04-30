package com.javafullstack.springbootfilms.Service;

import com.javafullstack.springbootfilms.dto.Tomar;
import com.javafullstack.springbootfilms.dto.TomarResponse;

public interface FilmService {
    TomarResponse placeOrder(Tomar tomar);
}
