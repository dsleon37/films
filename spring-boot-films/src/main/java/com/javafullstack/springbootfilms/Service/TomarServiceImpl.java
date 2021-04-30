package com.javafullstack.springbootfilms.Service;

import com.javafullstack.springbootfilms.dao.FilmRepository;
import com.javafullstack.springbootfilms.dto.Tomar;
import com.javafullstack.springbootfilms.dto.TomarResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class TomarServiceImpl implements  FilmService{
    private FilmRepository filmRepository;
    @Autowired
    public TomarServiceImpl(FilmRepository filmRepository){
        this.filmRepository=filmRepository;
    }
    //@Override
    @Transactional
    public TomarResponse placeOrder(Tomar tomar) {



        return new TomarResponse();
    }
}
