import { login, logout } from "../../actions/auth";

test('should setup login action object', ()=>{
    const id= '123'
    const action = login(id);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: id  
    })
});
test('should setup logout action object', ()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});