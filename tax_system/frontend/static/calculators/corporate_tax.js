document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("corporateTaxForm");

  if (!form) return; // safety (important)

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const profit = parseFloat(document.getElementById("profit").value);
    const companyType = document.getElementById("companyType").value;
    const isListed = document.getElementById("isListed").checked;

    if (!profit || profit <= 0) {
      alert("Please enter valid profit");
      return;
    }

    let taxRate = 0;

    switch (companyType) {
      case "general":
        taxRate = 0.25;
        break;
      case "bank":
        taxRate = 0.30;
        break;
      case "special":
        taxRate = 0.20;
        break;
    }

    let tax = profit * taxRate;

    let rebate = 0;
    if (isListed) {
      rebate = tax * 0.05;
      tax -= rebate;
    }

    const effectiveRate = (tax / profit) * 100;

    const resultContainer = document.getElementById("corporate-tax-result-container");

    resultContainer.innerHTML = `
      <div style="margin-top:20px;">
        <h3>Result</h3>
        <p><strong>Total Tax:</strong> NPR ${tax.toFixed(2)}</p>
        <p><strong>Effective Tax Rate:</strong> ${effectiveRate.toFixed(2)}%</p>
        <p><strong>Applied Rate:</strong> ${(taxRate * 100)}%</p>
        ${isListed ? `<p><strong>Rebate:</strong> NPR ${rebate.toFixed(2)}</p>` : ""}
      </div>
    `;
  });
});