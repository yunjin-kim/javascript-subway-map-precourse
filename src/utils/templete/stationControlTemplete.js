export const stationControlTemplete = `
  <h3>역 이름</h3>
  <form>
    <input id="station-name-input" />
    <button id="station-add-button">추가</button>
  </form>
  <div id="station-field"></div>
`;

export const stationListTemplete = `
  <h1>지하철 역 목록</h1>
    <table style="border: 1px solid black">
      <thead>
        <td style="border: 1px solid black">
          역 이름
        </td>
        <td style="border: 1px solid black">
          설정
        </td>
      </thead>
      <tbody id="station-list">
      </tbody>
    </table>
  `;

  export function stationNameTemplete(stationName) {
    const divFragment = document.createElement('tr');
    const stationNameTemplete = `
        <td style="border: 1px solid black" class="station-name">
          ${stationName}
        </td>
        <td style="border: 1px solid black">
          <button class="station-delete-button">삭제</button>
        </td>
    `;
    divFragment.innerHTML = stationNameTemplete;

    return divFragment;
  }