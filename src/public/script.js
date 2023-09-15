document.addEventListener('DOMContentLoaded', async () => {
  const { data } = await axios.get('http://localhost:3000/family-name');

  console.log(data);

  // 성씨 셀렉트 생성
  createSelect(data);
});

/**
 * 족보를 표현할 select 생성
 */
function createSelect(list, selectType = 'family-name-select') {
  const selectLabel = document.getElementById('select-label');
  const select = document.getElementById('family-name-select');

  list.forEach((item) => {
    // select에 들어갈 option값 넣기
    const option = document.createElement('option');
    option.id = item.familyNameId;
    option.text = `${item.familyName}(${item.classicalChinese})`;

    select.appendChild(option);
  });

  select.addEventListener('change', (e) => {
    if (e.target.id === 'family-name-select') {
      console.log(e.target.selectedOptions[0].id);
    }
    if (e.target === 'origin-select') {
    }
    if (e.target === 'clan-select') {
    }
  });
}

function selectEventListener(event) {
  console.log(event.target);
  console.log(event);
}
