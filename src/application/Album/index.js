import React, { useState, useEffect,useCallback } from 'react';
import { connect } from 'react-redux';
import { getAlbum, changeEnterLoading } from './store';
import { CSSTransition } from 'react-transition-group';
import Header from '../../baseUI/header';
import { Scroll } from '../../components/scroll';
import { getCount, getName, isEmpty } from '../../api/utils';
import Loading from '../../baseUI/loading';
import { Container, DescContainer, MenuContainer, SongContainer } from './style';
function Album(props) {
    const { album, enterLoading } = props;
    const id = props.match.params.id;
    const { getAlbumDispatch,changeEnterLoadingDispatch } = props;
    const currentAlbum = album.toJS();
    useEffect(() => {
            getAlbumDispatch(id);
            changeEnterLoadingDispatch(true);
    }, [getAlbumDispatch,changeEnterLoadingDispatch,id]);
    const [showStatus, setShowStatus] = useState(true)
    const handleBack = useCallback(() => {
        setShowStatus(false);
    },[])
    const renderDesc = () => (
        <DescContainer background={currentAlbum.coverImgUrl}>
            <div className="background" >
                <div className="filter"></div>
            </div>
            <div className="img-container">
                <img alt="pic" src={currentAlbum.coverImgUrl}></img>
                <div className="play-count">
                    <i className="iconfont">&#xe6b0;</i>
                    <span className="count">{getCount(currentAlbum.subscribedCount)}</span>
                </div>
            </div>
            <div className="content-container">
                <h2>{currentAlbum.name}</h2>
                <div className="person">
                    <img alt="avatar" className="avatar" src={currentAlbum.creator.avatarUrl}></img>
                    <span className="nickname">{currentAlbum.creator.nickname}</span>
                </div>
            </div>
        </DescContainer>
    );
    const renderMenu = () => (
        <MenuContainer>
            <div className="menu-item">
                <i className="iconfont-comment">&#xe7b2;</i>
                <span>评论</span>
            </div>
            <div className="menu-item">
                <i className="iconfont-like">&#xe7b3;</i>
                <span>点赞</span>
            </div>
            <div className="menu-item">
                <i className="iconfont-book">&#xe7b0;</i>
                <span>收藏</span>
            </div>
            <div className="menu-item">
                <i className="iconfont-more">&#xe74f;</i>
                <span>更多</span>
            </div>
        </MenuContainer>
    );
    const renderSong = () => (
        <SongContainer>
            <div className="header">
                <div className="play-header">
                    <i className="iconfont-play">&#xe701;</i>
                    <span>播放全部</span>
                    <span className="hint">{`(共${currentAlbum.tracks.length}首)`}</span>
                </div>
                <div className="favorite-button">
                    <i className="iconfont-add">&#xe7b0;</i>
                    <span>{`收藏(${getCount(currentAlbum.subscribedCount)})`}</span>
                </div>
            </div>
            <div className="song-list">
                {currentAlbum.tracks.map((item, index) => {
                    return (<li key={index}>
                        <span className="index">{index + 1}</span>
                        <div className="info">
                            <span>{item.name}</span>
                            <span className="info-singer">
                                {getName(item.ar)} - {item.al.name}
                            </span>
                        </div>
                    </li>)
                })}
            </div>
        </SongContainer>
    );

    return (
        <CSSTransition
            in={showStatus} timeout={300} classNames="fly"
            appear={true} unmountOnExit onExit={props.history.goBack}>
            <Container>
                <Loading show={enterLoading}></Loading>
                <Header title="返回" handleClick={handleBack}></Header>
                {isEmpty(currentAlbum) ? <></>:
                <Scroll bounceTop={false}>
                    <div>
                        {renderDesc()}
                        {renderMenu()}
                        {renderSong()}
                    </div>

                </Scroll>}
            </Container>
        </CSSTransition>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAlbumDispatch(id) {
            dispatch(getAlbum(id))
        },
        changeEnterLoadingDispatch(data) {
            dispatch(changeEnterLoading(data))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        enterLoading: state.getIn(['album', 'enterLoading']),
        album: state.getIn(['album', 'album'])
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Album));