import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMemo, removeMemo, updateMemo } from '../memo'

const MemoBoard = () => {

    const dispatch = useDispatch();
    const memoList = useSelector((state) => state.memo.memo);
    

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [newTitle, setNewTitle] = useState('')
    const [newContent, setNewContent] = useState('');


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
                        <button onClick={() => { dispatch(removeMemo({ id: memo.id })) }} >X</button>
                        <p>id : {memo.id}</p>
                        <p>내용 : {memo.content}</p>
                        <input type="text" placeholder='수정할 제목을 입력하세요' onChange={(e) => { setNewTitle(e.target.value)}}/>
                        <input type="text" placeholder='수정할 내용을 입력하세요' onChange={(e) => { setNewContent(e.target.value) }} />
                        <button onClick={() => {dispatch(updateMemo({ id: memo.id, title, content }))}}>수정완료</button>                        
                        <hr />
                    </div>
                ))
                
            }
        </div>
    );
};

export default MemoBoard;