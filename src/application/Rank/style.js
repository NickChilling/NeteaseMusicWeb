import styled from 'styled-components';
import globalStyle from '../../assets/global_style';

export const OfficialRank = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;

    h1{
        padding: 0.3rem;
        font-size: ${globalStyle['font-size-m']}
    }
    .official-rank-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        .official-rank-item{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            padding: 0.2rem;
            border-bottom: 1px solid goldenrod;
            .img-container{
                width: 33vw;
                height: 33vw;
                max-width: 240px;
                max-height: 240px;
                margin-left: 2px;
                position: relative;
                .update-frequency{
                    position:absolute;
                    font-size:${globalStyle['font-size-ss']};
                    left: 7px;
                    bottom: 7px;
                    color:${globalStyle['font-color-light']};
                }
                .mask{
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height:1rem;
                    background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));
                }
                img{
                    height:100%;
                    width:100%;
                    border-radius: 4px;
                }
            }
            .songs-container{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                font-size: ${globalStyle['font-size-s']};
                span{
                    margin-left: 3rem;
                }
            }

        }
        
    }
    `
export const Container = styled.div` 
    position:fixed;
    height: 85vh;
    width: 100vw;
    
    `
export const GlobalRank = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        margin: 0.3rem;
    }
    .global-rank-container{
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        justify-content: space-around;
        
        
        .img-container{
            margin: 5px;
            width: 30vw;
            height: 30vw;
            max-width: 240px;
            max-height: 240px;
            border-radius: 5px;
            position: relative;
            span{
            position: absolute;
            font-size:${globalStyle['font-size-ss']};
            left: 12px;
            bottom: 7px;
            color:${globalStyle['font-color-light']};
        }
            img{
                width: 100%;
                height: 100%;
            }
            .mask{
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height:2rem;
                    border-radius: 5px;
                    background: linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,43%,.4));
                }
        }

    }
`