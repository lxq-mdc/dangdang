// import IntersectionObserver from '@researchgate/react-intersection-observer';
import { useEffect, useRef, useState } from 'react'
import  {useNavigate} from 'react-router-dom'
import {getRecommends} from "../../api/api";
import './index.scss'
import {useQuery} from "react-query";
interface imgListProps {
    imgSrc: string,
    title: string,
    price:string
}
// type imgrefsType=HTMLImageElement|null
const RecommendComponent = () => {
    const navigate=useNavigate()
    let [imgrefs, setImgRefs] = useState<HTMLImageElement[]>([])
    let [imgList, setimgList] = useState<imgListProps[]>([])
    const {isError,isLoading,data}=useQuery('recommendBook',()=>getRecommends())
    let imgObserver= new IntersectionObserver(
        entries => {
            entries.forEach((item: IntersectionObserverEntry) => {
                if (item.intersectionRatio <= 0) return // intersectionRatio 是可见度 如果当前元素不可见就结束该函数。
                const { target } = item
                let imgTarget = target as HTMLImageElement
                imgTarget.src = imgTarget.dataset.src!; // 将 h5 自定义属性赋值给 src (进入可见区则加载图片)
                imgObserver.unobserve(item.target) //加载过的不用加载了
            })
        },
        {
            threshold: [0.01]
        }
    )
    let initObserver = () => {
        imgrefs.forEach((item: HTMLImageElement) => {
            imgObserver.observe(item)
        })
    }

    //点击每个推荐的书籍，重定向到书的详情页面
    const toBookDetail=(id:number)=>{
        navigate(`/bookDetail/${id}`)
    }
    //获取推荐专栏的物品信息
    useEffect(()=>{
            setimgList(data?.data)
    },[])
    useEffect(()=>{
        initObserver()
    })
    if(isLoading){
        return <div>loading</div>
    }if(isError){
        return <div>error</div>
    }
   // useEffect(()=>{
   //  initObserver()
   // })
    return (
        <div className='recommend'>
            <header className='recommend-title'>
                <div>为你推荐</div>
            </header>
            <section className='recommend-content'>
                <ul>
                    {
                        data?.data.map((item:any, index:any) => {
                            return (
                                <li key={index} onClick={()=>toBookDetail(item.id)}>
                                    <img src='' data-src={item.imgSrc} ref={img => imgrefs[index] = img!} alt="" />
                                    <div>{item.title}</div>
                                    <div className='RecommendPrice'>{item.price}</div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

        </div>
    )
}
export default RecommendComponent;
