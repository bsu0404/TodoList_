import React from 'react'
import './TodoListTemplate.css';

const TodoListTemplate = ({form,children}) =>{//함수형 컴포넌트
    return (//비구조화 할당, 두개의 props(각자 자리에서 넘어옴)
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>

        </main>
    );
};

export default TodoListTemplate;