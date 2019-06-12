import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1287453044,2162734814&fm=58&bpow=363&bpoh=363'
    },{
        id: 2,
        title: '简书简书',
        imgUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1287453044,2162734814&fm=58&bpow=363&bpoh=363'
    }]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}