/**
 * Title Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const Title = require('../src');

class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h2>一级标题</h2>
        <Title type="primary">新增面试标准</Title>
        <h2>二级标题</h2>
        <Title type="secondary">能力项设置</Title>
        <h2>三级标题</h2>
        <Title type="thirdary">专业能力</Title>
        <h2>一、二、三级标题</h2>
        <Title type="primary">新增面试标准</Title>
        <Title type="secondary">能力项设置</Title>
        <Title type="thirdary">专业能力</Title>
      </div>
    );
  }
}

module.exports = Demo;
