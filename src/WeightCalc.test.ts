import { test, expect } from 'vitest';

import { getLayout } from "./WeightCalc";

test('number below bar weight returns error', () => {
  expect(getLayout(0)).toEqual(new Error("Weight too low."))
  expect(getLayout(44)).toEqual(new Error("Weight too low."))
})

test('not divisible by five returns error', () => {
  expect(getLayout(56)).toEqual(new Error("Weight not divisible by 5."))
  expect(getLayout(102)).toEqual(new Error("Weight not divisible by 5."))
})

test('bar weight returns []', () => {
  const barWeight = 45
  expect(getLayout(barWeight)).toEqual([])
})

test('bar weight plus 90 returns [45]', () => {
  const barWeight = 45
  expect(getLayout(barWeight + 90)).toEqual([45])
})

test('bar weight plus 180 returns [45, 45]', () => {
  const barWeight = 45
  expect(getLayout(barWeight + 180)).toEqual([45, 45])
})

test('target weight 230 returns [45, 45, 2.5]', () => {
  expect(getLayout(230)).toEqual([45, 45, 2.5])
})

test('target weight 205 returns [45, 35]', () => {
  expect(getLayout(205)).toEqual([45, 35])
})

test('target weight 185 returns [45, 25]', () => {
  expect(getLayout(185)).toEqual([45, 25])
})

test('target weight 165 returns [35, 25]', () => {
  const target = 45 + ((35 + 25) * 2)
  expect(getLayout(target)).toEqual([35, 25])
})

test('target weight 255 returns [45, 45, 10, 5]', () => {
  const target = 45 + ((45 + 35 + 25) * 2)
  expect(getLayout(target)).toEqual([45, 35, 25])
})

test('target weight 270 returns [45, 45, 10, 10, 2.5]', () => {
  expect(getLayout(270)).toEqual([45, 45, 10, 10, 2.5])
})
