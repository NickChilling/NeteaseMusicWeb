import React, { useEffect } from 'react';
import Slider from '../../components/slider';
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators';
import RecommendList from '../../components/recommend_list';
import { Scroll } from '../../components/scroll';
import { Content } from './style';
import { forceCheck } from 'react-lazyload';
import Loading from '../../baseUI/loading/index';
import {renderRoutes} from 'react-router-config';
function Recommend(props) {
    const { bannerList, recommendList, enterLoading } = props;
    const { getBannerDataDispatch, getRecommendListDataDispatch } = props;

    useEffect(() => {
        if (!bannerList.size) {
            getBannerDataDispatch();
        }
        if (!recommendList.size) {
            getRecommendListDataDispatch();
        }
    }, [getBannerDataDispatch, getRecommendListDataDispatch,bannerList.size,recommendList.size]);

    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() : [];


        // scroll 下面的div 是为了包含slide 和recommend list
    return (
        <Content>
            <Scroll  onScroll={forceCheck}>
                <div>
                    <Slider bannerList={bannerListJS}>
                    </Slider>
                    <RecommendList recommendList={recommendListJS}></RecommendList>
                </div>
            </Scroll>
            {enterLoading ? <Loading></Loading> : null}
            {renderRoutes(props.route.routes)}
        </Content>
    )
}

const mapStateToProps = (state) => ({
    bannerList: state.getIn(['recommend', 'bannerList']),
    recommendList: state.getIn(['recommend', 'recommendList']),
    enterLoading: state.getIn(['recommend', 'endterLoading'])
});
const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch() {
            dispatch(actionTypes.getBannerList());
        },
        getRecommendListDataDispatch() {
            dispatch(actionTypes.getRecommendlist());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend));