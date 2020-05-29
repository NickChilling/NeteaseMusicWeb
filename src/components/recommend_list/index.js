import React from 'react';
import { getCount } from '../../api/utils';
import { List, ListWrapper, ListItem } from './style';
import LazyLoad from 'react-lazyload';
import {withRouter} from 'react-router';
function RecommendList(props) {
    const enterDetail = (id)=>{
        props.history.push(`/recommend/:${id}`);
    }
    return (
        <ListWrapper>
            <h1 className='title'> 推荐歌单 </h1>
            <List>
                {
                    props.recommendList.map((item, index) => {
                        return (
                            <ListItem key={item.id + index} onClick={()=>enterDetail(item.id)} >
                                <div className='img-wrapper'>
                                    
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png') }alt="music" />}>
                                        <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                                    </LazyLoad>
                                    <div className="decorate"></div>
                                    <div className="play-count">
                                        <i className="iconfont play">&#xe6b0;</i>
                                        <span className="count">{getCount(item.playCount)}</span>
                                    </div>
                                </div>
                                <div className='desc'>{item.name}</div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWrapper>


    )
}
export default React.memo(withRouter(RecommendList));
