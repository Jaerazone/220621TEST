import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMemo, removeMemo } from '../memo'

const MemoBoard = () => {

    const dispatch = useDispatch();
    const memoList = useSelector((state) => state.memo.memo);
    

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    return (
        <div>
            <h1>메모하는 공간입니다</h1>
            <div>
                <input type="text" onChange={(e) => { setTitle(e.target.value)}}/> <br />
                <textarea cols="30" rows="10" onChange={(e) => { setContent(e.target.value)}}></textarea> <br />
                <button onClick={() => { dispatch(addMemo({ id:  memoList.length === 0 ? 0 : memoList[memoList.length - 1].id + 1 , title, content })) }}>입력</button>
            </div> 
            <hr />
            {   
                memoList.map((memo, index) => (
                    <div key={memo.id}>
                        <p>제목 : {memo.title} </p>  
                        <p>id : {memo.id}</p>
                        <p>내용 : {memo.content}</p>
                        <button onClick={() => { dispatch(removeMemo({ id: memo.id })) }} >X</button>
                        <hr />
                    </div>
                ))
                
            }
        </div>
    );
};

export default MemoBoard;