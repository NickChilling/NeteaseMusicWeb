import React from 'react';
import { Top, TabItem, Tab } from './style';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import Player from '../player';
function Home(props) {
    const { route } = props;  // 把路由传到组件里
    return (
        <div>
            <Top>
                <span className='iconfont-menu'>&#xe6c1;</span>
                <span className='title'>WebApp</span>
                <span className='iconfont-search'>&#xe6b7;</span>
            </Top>
            <Tab>
                <NavLink to="/recommend" activeClassName="seleted">
                    <TabItem>
                        <span> 推荐 </span>
                    </TabItem>
                </NavLink>
                <NavLink to="/singers" activeClassName="selected">
                    <TabItem>
                        <span> 歌手 </span>
                    </TabItem>
                </NavLink>
                <NavLink to="/rank" activeClassName="selected"><TabItem><span> 排行榜 </span></TabItem></NavLink>
            </Tab>
            {renderRoutes(route.routes)  // todo: render route
            }
            <Player></Player>
        </div>
    )
}

export default React.memo(Home);