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
    const selectId = e.target.id;

    // 다음 셀렉트 내용 초기화
    let nextSelect = e.target.nextElementSibling;
    while (nextSelect.tagName === 'SELECT') {
      const option = document.createElement('option');
      option.text = nextSelect.children[0].text;

      nextSelect.innerHTML = '';
      nextSelect.appendChild(option);

      nextSelect = nextSelect.nextElementSibling;
    }

    // 예외 처리 - 내용 선택이 아닌 경우
    if (e.target.selectedOptions[0].text.indexOf('-') !== -1) {
      return;
    }

    if (selectId === 'family-name-select') {
      const { data } = await axios.get(
        `http://localhost:3000/origin-clan/${e.target.selectedOptions[0].id}/origin`,
      );

      const list = data.map((item) => {
        return { id: item.originClanId, text: item.originClanName };
      });

      createSelect(list, 'origin-select');
    }
    if (selectId === 'origin-select') {
      const { data } = await axios.get(
        `http://localhost:3000/origin-clan/${e.target.selectedOptions[0].id}/clan`,
      );

      const list = data.map((item) => {
        return { id: item.originClanId, text: item.originClanName };
      });

      createSelect(list, 'clan-select');
    }
    if (targetId === 'clan-select') {
    }
  });
}

async function selectEventListener(event) {
  console.log(event.target);
  console.log(event);
}
