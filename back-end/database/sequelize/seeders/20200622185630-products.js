module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(
    'products',
    [
      {
        prod_name: '유로 601 페블 디자인테이블 1600',
        size_x: 159,
        size_y: 79,
        price: 395000,
        img: '1.jpg',
      }, {
        prod_name: '플러스 모션데스크 1400_선반형 120',
        size_x: 140,
        size_y: 75,
        price: 99900,
        img: '2.jpg',
      }, {
        prod_name: '바흐 701 월넛 서랍책상_1800_D75',
        size_x: 130,
        size_y: 70,
        price: 1093000,
        img: '3.jpg',
      }, {
        prod_name: '플렉스2 하부책장',
        size_x: 170,
        size_y: 90,
        price: 127000,
        img: '4.jpg',
      }, {
        prod_name: '플렉스2 모니터선반',
        size_x: 166,
        size_y: 54,
        price: 49000,
        img: '5.jpg',
      }, {
        prod_name: '바흐 701 월넛 하부가림판_1800_책상용',
        size_x: 159,
        size_y: 79,
        price: 50000,
        img: '6.jpg',
      }, {
        prod_name: '플렉스2 확장일반책상',
        size_x: 197,
        size_y: 88,
        price: 120000,
        img: '7.jpg',
      }, {
        prod_name: '카페로 대면책상_1400',
        size_x: 140,
        size_y: 53,
        price: 509000,
        img: '8.jpg',
      }, {
        prod_name: '빈트 선반책상 1200_D6',
        size_x: 164,
        size_y: 58,
        price: 274000,
        img: '9.jpg',
      }, {
        prod_name: '플러스템2 6단 격자책장_800',
        size_x: 174,
        size_y: 83,
        price: 167000,
        img: '10.jpg',
      }, {
        prod_name: '알레 2단 하부선반장',
        size_x: 50,
        size_y: 40,
        price: 214000,
        img: '11.jpg',
      }, {
        prod_name: '아이디S 가죽 멀티수납침대_수납형',
        size_x: 217.3,
        size_y: 116,
        price: 670000,
        img: '12.jpg',
      }, {
        prod_name: '버니 벙커침대 SS_계단장형',
        size_x: 244.5,
        size_y: 116.2,
        price: 1190000,
        img: '13.jpg',
      }, {
        prod_name: '밀란 102 키즈 매트리스 SS',
        size_x: 1550,
        size_y: 730,
        price: 270000,
        img: '14.jpg',
      }, {
        prod_name: '바흐 701 인칸토 고급형 4인 식탁',
        size_x: 1800,
        size_y: 780,
        price: 2139000,
        img: '15.jpg',
      },
    ],
    {},
  ),

  down: (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};
