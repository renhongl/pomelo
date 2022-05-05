import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './front-end.module.css';
import Card from '@site/src/components/Card';
import Category from '@site/src/components/Category';
import Navi from '@site/src/components/Navi';

const jsList = [
  {
    id: '1',
    name: '力扣算法题',
    logo: '/img/leetcode.svg',
    sub: '两数之和，三数之和，跳跃游戏等各种算法题讲解',
    path: '/docs/leetcode',
  },
  {
    id: '2',
    name: '排序',
    logo: '/img/sort.png',
    sub: '冒泡排序，快速排序，选择排序，直接插入排序，归并排序，堆排序。。。',
    path: '/docs/sort',
  },
  {
    id: '3',
    name: '数据结构',
    logo: '/img/graph.png',
    sub: '顺序表，链表，队列，栈，树，二叉树，堆，图',
    path: '/docs/data-structure',
  },
  {
    id: '4',
    name: '算法',
    logo: '/img/algo.png',
    sub: '递归，回溯，贪心算法，动态规划，广度优先搜索，深度优先搜索',
    path: '/docs/algorithom',
  },
  {
    id: '5',
    name: '设计模式',
    logo: '/img/design.png',
    sub: '原型模式，单例模式，适配器模式，状态模式，观察者模式',
    path: '/docs/design-pattern',
  },
  {
    id: '6',
    name: '手写JS',
    logo: '/img/js.png',
    sub: '手写New，手写call，手写apply，手写Object.create，手写promise',
    path: '/docs/write-js',
  },
  {
    id: '7',
    name: 'HTTP',
    logo: '/img/js.png',
    sub: '手写New，手写call，手写apply，手写Object.create，手写promise',
    path: '/docs/write-js',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Home`}
      description="Description will go into a meta tag in <head />"
    >
      <Navi></Navi>
      <main className={styles.main}>
        <Category title="Javascript">
          {jsList.map((item) => (
            <Link to={item.path} key={item.id}>
              <Card data={item}></Card>
            </Link>
          ))}
        </Category>
        <Category title="HTML">
          {jsList.map((item) => (
            <Link to={item.path} key={item.id}>
              <Card data={item}></Card>
            </Link>
          ))}
        </Category>
        <Category title="CSS">
          {jsList.map((item) => (
            <Link to={item.path} key={item.id}>
              <Card data={item}></Card>
            </Link>
          ))}
        </Category>
        <Category title="React">
          {jsList.map((item) => (
            <Link to={item.path} key={item.id}>
              <Card data={item}></Card>
            </Link>
          ))}
        </Category>
        <Category title="Angular">
          {jsList.map((item) => (
            <Link to={item.path} key={item.id}>
              <Card data={item}></Card>
            </Link>
          ))}
        </Category>
      </main>
    </Layout>
  );
}
