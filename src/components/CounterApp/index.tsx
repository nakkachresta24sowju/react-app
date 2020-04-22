import React from 'react';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';
import styled from '@emotion/styled';
import tw from "tailwind.macro";

import counterStore from '../../stores/CounterStore';

const Button = styled.button`
${tw`w-10 h-10 text-center bg-blue-700`}
`;
const Input = styled.input`
${tw`w-36 h-10 text-center `}
`;
@observer
class CounterApp extends React.Component {
    reaction1 = reaction(() => counterStore.count, count => console.log("count", count));
    render() {
        return (
            <div>
                <Button onClick={counterStore.onIncrement}>+</Button>
                <Input type="number" value={counterStore.count} onChange={counterStore.onChange} />
                <Button onClick={counterStore.onDecrement}>-</Button>
            </div>);
    }
}
export default CounterApp;