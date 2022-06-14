import { handleMockBehavior } from "./behavior";
import { Name } from "./decorator/fake.decorator";
import { NumberMock, ObjectMock, ArrayMock, EnumMock } from "./decorator/type.decorator";
import { MockDataStore } from "./MockDataStore";


class Date {
  @NumberMock({ max: 2020, min: 2010, isInt: true })
  year: number;

  @NumberMock({ max: 13, min: 1, isInt: true })
  month: number;
}

class Skill {
  @EnumMock(['卖萌', '捕猎', '跑酷', '抓老鼠'])
  name: string;

  @NumberMock({
    max: 100
  })
  level: number;
}

class Cat {
  @Name.lastName('male')
  name: string;

  @ObjectMock(Date)
  brithday: Date;

  @ArrayMock({ max: 4 })
  @Name.findName()
  firendsName: string[]

  @ArrayMock({ min: 1, max: 3 })
  @ObjectMock(Skill)
  skills: Skill[]
}

console.log(MockDataStore.instance.targetMap);

const cat_1 = handleMockBehavior(Cat);
const cat_2 = handleMockBehavior(Cat);
const cat_3 = handleMockBehavior(Cat);

console.log('cat_1', cat_1);
console.log('cat_2', cat_2);
console.log('cat_3', cat_3);