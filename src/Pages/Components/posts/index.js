import {useState, useMemo} from 'react';

import {
    Bip,
    BipContainer,
    Filter,
    FiltersContainer,
    FilterTitle, PostActions,
    PostAuthor, PostButton, PostButtonIcon, PostCoin,
    PostContainer, PostContent, PostTime,
    StatusContainer
} from "./styles";

import ArrowIcon from '../../../assets/icons/arrow.svg';
import UtilDate from "../../../utils/formatDate";

export function Posts() {
    // useEffect(() => {
    //   websocket connect
    // }, [])

    return (
        <div>
            <Status/>
            <Filters/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
            <Post date={'2021-02-05T04:37:24.531Z'}/>
        </div>
    );
}

function Status() {
    return (
        <StatusContainer>
            <BipContainer>
                <Bip/>
                Online
            </BipContainer>
            256 peoples | 32ms
        </StatusContainer>
    )
}

function Filters() {
    let filters = ['KLV', 'TRX', 'BTC', 'IVO'];

    return (
        <>
            <FilterTitle>Filters</FilterTitle>
            <FiltersContainer>
                {filters.map((item, i) => <Filter key={i}>{item}</Filter>)}
            </FiltersContainer>
        </>
    )
}

function Post({date}) {
    let dateFormat = new Date(date);
    let [timeLeft, setTimeLeft] = useState(0);

    useMemo(() => {
        if (dateFormat.getTime() < (Date.now() + 1000))
            return;

        let interval = setInterval(() => {
            let now = Date.now();
            if (dateFormat.getTime() < now + 1000) {
                setTimeLeft('');
                return clearInterval(interval);
            }
            setTimeLeft(UtilDate(dateFormat))
        }, 200);
    }, [date])

    return (
        <PostContainer>
            <PostAuthor>
                Wall Street Bets
            </PostAuthor>
            <PostContent>
                <div>
                    <PostCoin>????</PostCoin>
                </div>
                <PostActions>
                    {timeLeft ? <PostTime>{timeLeft}</PostTime> :
                        <PostButton>
                            G O
                            <PostButtonIcon src={ArrowIcon}/>
                        </PostButton>}
                </PostActions>
            </PostContent>
        </PostContainer>
    )
}