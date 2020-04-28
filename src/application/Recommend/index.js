import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';
import RecommendList from '../../components/recommend_list';
import { Scroll } from '../../components/scroll';
import { Content } from './style';
function Recommend(props) {
    const { bannerList, recommendList } = props;
    const { getBannerDataDispatch, getRecommendListDataDispath } = props;

    useEffect(() => {
        getBannerDataDispatch();
        getRecommendListDataDispath();
    }, [getBannerDataDispatch, getRecommendListDataDispath]);

    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];

    return (
        <Content>
            <Scroll className="list">
                <div>
                    <Slider bannerList={bannerListJS}>
                    </Slider>
                    <RecommendList recommendList={recommendListJS}></RecommendList>
                </div>
            </Scroll>
        </Content>
    )
}

const mapStateToProps = (state) => ({
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList'])
});
const mapDispatchToProps=(dispatch)=>{
    return {
        getBannerDataDispatch(){
            dispatch(actionTypes.getBannerList());
        },
        getRecommendListDataDispath(){
            dispatch(actionTypes.getRecommendlist());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Recommend));