import React from 'react';
import { List, ListItem } from './style';
import { Scroll } from '../../components/scroll';
const singerList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15].map(item => {
    return {
        picUrl: "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
        name: "隔壁老樊",
        accountId: 277313426,
    }
});

export default function SingerList(props) {

    return (
        <Scroll direction="vertical">
            <List>{
                singerList.map((item, index) => {
                    return (
                        <ListItem key={item.accountId + index}>
                            <div className="img-wrapper">
                                <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                            </div>
                            <span className="name">{item.name}</span>
                        </ListItem>
                    )
                })
            }</List>
        </Scroll>
    )
}