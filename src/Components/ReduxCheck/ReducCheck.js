/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../../Redux/Slice/CounterSlice';

const ReducCheck = () => {
  const {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const Handleincrement = () => {
    dispatch(increment());
  };
  const Handledecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          marginTop: 50,
          height: 200,
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 24}}>Counter: {count}</Text>
        <Button title="Increment" onPress={() => Handleincrement()} />
        <Button title="Decrement" onPress={() => Handledecrement()} />
      </View>
    </>
  );
};

export default ReducCheck;
