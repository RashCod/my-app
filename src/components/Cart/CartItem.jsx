import React, { useRef } from 'react'
import s from "./Cart.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { setRemove,plusList,minusList } from '../../Redux/slices/cartSlice';



export const CartItem = ({count,id,image,name,price}) => {
const dispatch = useDispatch()
// const {} = useSelector((state)=> state.cartSlice)



const removeList = () => {
  if(window.confirm('Вы действительно хотите удалить товар ?'))
  dispatch(setRemove(id))

}

const minus = useRef();


const minusListFun = () => {
  if(count === 1){
    minus.current.disabled();
    minus.current.style.opacity = 0.5;
  
  }else{
    dispatch(minusList(id))
  }
}


  return (
  
    <div className={s.cartItem}>
      <div className={s.left}>
   <div className={s.close}onClick={()=> removeList()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</div>
        <div className={s.imgBlock}>
          <img src={image} alt="iphone" className={s.img} />
        </div>
        {/* <br/> */}
        <h2 className={s.title}>{name}</h2>
        <br/>
      </div>
      <div className={s.right}>
       <div className={s.countBlock}>
       <svg   onClick={()=>dispatch(plusList(id))} className={s.plus} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        <b>{count}</b>
      <svg ref={minus} onClick={minusListFun} className={s.minus} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

       </div>
        <b className={s.price}>{count*price} ₽</b>
      </div>
    </div>

  )
}
