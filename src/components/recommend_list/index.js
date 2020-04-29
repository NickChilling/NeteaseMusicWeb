import React from 'react';
import { getCount } from '../../api/utils';
import { List, ListWrapper, ListItem } from './style';
import LazyLoad from 'react-lazyload';
function RecommendList(props) {
    return (
        <ListWrapper>
            <h1 className='title'> 推荐歌单 </h1>
            <List>
                {
                    props.recommendList.map((item, index) => {
                        return (
                            <ListItem key={item.id + index}>
                                <div className='img-wrapper'>
                                    <div className="decorate"></div>
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('./music.png') }alt="music" />}>
                                        <img src={item.picUrl + "?param=300x300"} width="100%" height="100%" alt="music" />
                                    </LazyLoad>
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
export default React.memo(RecommendList);
