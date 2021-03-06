import React from 'react';
import { List, ListItem } from './style';


export default function SingerList(props) {
    const {singerList} = props;
    return (

            <List>{
                singerList.map((item, index) => {
                    return (
                        <ListItem key={item.id}>
                            <div className="img-wrapper">
                                <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="music" />
                            </div>
                            <span className="name">{item.name}</span>
                        </ListItem>
                    )
                })
            }</List>

    )
}