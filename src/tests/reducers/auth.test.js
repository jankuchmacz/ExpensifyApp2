import authReducer from "../../reducers/auth";

test('should set default state', ()=> {
    const state = authReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({});
});

test('should set uid for login user', ()=>{
    const id='123';
    const action = {
        type: 'LOGIN',
        uid: id
    };
    const state = authReducer({}, action);
    expect(state).toEqual({
        uid: id
    })
});

test('should clear uid for logout', ()=>{
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: '123'}, action);
    expect(state).toEqual({})
});