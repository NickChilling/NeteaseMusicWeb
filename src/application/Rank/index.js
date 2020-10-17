import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { getRankList } from './store';
import { Container, OfficialRank, GlobalRank } from './style';
import { Scroll } from '../../components/scroll';
import { getRankIndex } from '../../api/utils';
import Loading from '../../baseUI/loading';
import { renderRoutes } from 'react-router-config';
const mapStateToProps = (state) => {
    return {
        rankList: state.getIn(['rank', 'rankList']).toJS(),
        enterLoading: state.getIn(['rank', 'enterLoading'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getRankListDispatch() {
            dispatch(getRankList());
        }
    }
};


function Rank(props) {
    const { rankList, enterLoading } = props;
    const { getRankListDispatch } = props;
    useEffect(() => {
        if (!rankList.length) {
            getRankListDispatch();
        }
    }, []);
    const enterDetail = useCallback((detail)=>{props.history.push(`/rank/${detail.id}`)},[])
    // const enterDetail = (detail)=>{props.history.push(`/rank/${detail.id}`)};
    let globalIndex = getRankIndex(rankList);
    let officialList = rankList.slice(0, globalIndex);
    let globalList = rankList.slice(globalIndex, rankList.length);
    return (
        <Container>
            <Scroll>
                <div>
                <OfficialRank>
                    <h1>官方榜</h1>
                    <div className="official-rank-container">
                        {officialList.map((item) => (
                            <div className="official-rank-item" key={item.coverImgId} onClick={()=>{enterDetail(item)}}>
                                <div className="img-container">
                                    <img alt={item.name} src={item.coverImgUrl}></img>
                                    <div className="mask"></div>
                                    <span className="update-frequency">{item.updateFrequency}</span>
                                </div>
                                <div className="songs-container">
                                    {item.tracks.map(songItem => (
                                        <span key={songItem.first}>{`${songItem.first} - ${songItem.second}`}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </OfficialRank>
                <GlobalRank>
                    <h1>全球榜</h1>
                    <div className="global-rank-container">
                        {globalList.map(item => (
                            <div className="img-container" key={item.coverImgId}>
                                <img src={item.coverImgUrl} alt={item.name} />
                                <div className="mask"></div>
                                <span>{item.updateFrequency}</span>
                            </div>
                        ))}
                    </div>
                </GlobalRank>
                </div>
            </Scroll>
            {enterLoading?<Loading></Loading>:<></>}
            {renderRoutes(props.route.routes)}
        </Container>
    )
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Rank));

