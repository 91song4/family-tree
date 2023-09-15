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

  select.addEventListener('change', selectEventListener);
}

/**
 * select 별로 핸들링 해주는 함수
 */
async function selectEventListener(e) {
  const selectId = e.target.id;

  // 다음 셀렉트 내용 초기화
  initSelect(e.target);

  // 예외 처리 - 내용 선택이 아닌 경우
  if (e.target.selectedOptions[0].text.indexOf('-') !== -1) return;

  // 성씨 셀렉트인 경우
  if (selectId === 'family-name-select') {
    const { data } = await axios.get(
      `http://localhost:3000/origin-clan/${e.target.selectedOptions[0].id}/origin`,
    );

    const list = data.map((item) => {
      return { id: item.originClanId, text: item.originClanName };
    });

    return createSelect(list, 'origin-select');
  }

  // 본관 셀렉트인 경우
  if (selectId === 'origin-select') {
    const { data } = await axios.get(
      `http://localhost:3000/origin-clan/${e.target.previousElementSibling.selectedOptions[0].id}/clan`,
    );

    const list = data.map((item) => {
      return { id: item.originClanId, text: item.originClanName };
    });

    return createSelect(list, 'clan-select');
  }

  // 파 셀렉트인 경우
  if (selectId === 'clan-select') {
    const { data } = await axios.get(
      `http://localhost:3000/family-member/clan/${e.target.selectedOptions[0].id}`,
    );

    return createTree(data);
  }
}

/**
 * 족보 구조 생성기
 */
function createTree(data) {
  const tree = document.getElementById('tree');

  // 족보 초기화
  tree.innerHTML = '';

  Object.keys(data).forEach((item, i) => {
    // 루트노드 생성
    if (i === 0) {
      const ul = document.createElement('ul');

      const li = createNode(data[item][0]);

      ul.appendChild(li);

      return tree.appendChild(ul);
    }

    data[item].forEach((item) => {
      const li = createNode(item);

      const parentNodeLI = document.getElementById(`li-${item.father}`);
      const parentComment = parentNodeLI.childNodes[0];

      // 리프노드일 경우
      if (parentComment.textContent === 'Leaf') {
        const ul = document.createElement('ul');

        ul.appendChild(li);

        parentComment.textContent = '';

        parentNodeLI.appendChild(ul);
      }
      // 리프노드가 아닌 경우
      else {
        parentNodeLI.children[1].appendChild(li);
      }
    });
  });
}

/**
 * 족보 노드 생성
 */
function createNode(nodeData) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const comment = document.createComment('Leaf');

  li.id = `li-${nodeData.memberId}`;
  a.text = nodeData.memberName;

  li.appendChild(comment);
  li.appendChild(a);

  return li;
}

/**
 * 현재 셀렉트의 다음셀렉트들의 내용을 초기화 하는 함수
 */
function initSelect(currentSelect) {
  let nextSelect = currentSelect.nextElementSibling;
  while (nextSelect.tagName === 'SELECT') {
    const option = document.createElement('option');
    option.text = nextSelect.children[0].text;

    nextSelect.innerHTML = '';
    nextSelect.appendChild(option);

    nextSelect = nextSelect.nextElementSibling;
  }
}
