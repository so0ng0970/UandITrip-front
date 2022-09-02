import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css";
const Form = () => {




    return (
        
        <Card claseName="card">       
          <div claseName="mb-3">
            <label for="formFile" claseName="form-label">사진 업로드 </label>
            <input claseName="form-control" type="file" id="formFile"/>
          </div>  


          <div claseName="mb-3">
            <label for="exampleFormControlInput1" claseName="form-label"></label>
          작성자: <input type="email" claseName="form-control" id="exampleFormControlInput1" placeholder="입력해주세요"/>
        </div>

        
        <div claseName="mb-3">
            <label for="exampleFormControlInput1" claseName="form-label">여행날짜</label>
            <input type="email" claseName="form-control" id="exampleFormControlInput1" placeholder="입력해주세요"/>
        </div>

        
        <div claseName="mb-3">
            <label for="exampleFormControlInput1" claseName="form-label">MBTI</label>
            <input type="email" claseName="form-control" id="exampleFormControlInput1" placeholder="입력해주세요"/>
        </div>

        <div claseName="mb-3">
            <label for="exampleFormControlTextarea1" claseName="form-label">내용</label>
            <textarea claseName="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="입력해주세요"></textarea>
        </div>

        <button type="button" claseName="btn btn-outline-secondary">입력</button>


        </Card>
    );

    
};



const Card = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: solid #E0E0E0; 
  border-width: thick;
  border-radius: 10px;
  width: 50%

`;

export default Form;