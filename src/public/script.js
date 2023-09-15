document.addEventListener('DOMContentLoaded', async () => {
  const { data } = await axios.get('http://localhost:3000/family-name');

  const list = data.map((item) => {
    return {
      id: item.familyNameId,
      text: `${item.familyName}(${item.classicalChinese})`,
    };
  });

  // 성씨 셀렉트 생성
  createSelect(list);
});

/**
 * 족보를 표현할 select 생성
 */
function createSelect(list, selectType = 'family-name-select') {
  const select = document.getElementById(selectType);

  list.forEach((item) => {
    // select에 들어갈 option값 넣기
    const option = document.createElement('option');
    option.id = item.id;
    option.text = item.text;

    select.appendChild(option);
  });

  select.addEventListener('change', async (e) => {
    if (e.target.id === 'family-name-select') {
      const { data } = await axios.get(
        `http://localhost:3000/origin-clan/${e.target.selectedOptions[0].id}`,
      );

      const list = data.map((item) => {
        return { id: item.originClanId, text: item.originClanName };
      });

      createSelect(list, 'origin-select');
    }
    if (e.target === 'origin-select') {
    }
    if (e.target === 'clan-select') {
    }
  });
}

async function selectEventListener(event) {
  console.log(event.target);
  console.log(event);
}
