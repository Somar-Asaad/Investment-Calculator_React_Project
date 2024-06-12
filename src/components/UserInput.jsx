export default function UserInput({ handleInputChange, UserInput }) {
  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              value={UserInput.initialInvestment}
              onChange={(event) =>
                handleInputChange("initialInvestment", event.target.value)
              }
              required
            />
          </p>
          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              value={UserInput.annualInvestment}
              onChange={(event) =>
                handleInputChange("annualInvestment", event.target.value)
              }
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input
              type="number"
              value={UserInput.expectedReturn}
              onChange={(event) =>
                handleInputChange("expectedReturn", event.target.value)
              }
              required
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              type="number"
              value={UserInput.duration}
              onChange={(event) =>
                handleInputChange("duration", event.target.value)
              }
              required
            />
          </p>
        </div>
      </div>
    </>
  );
}
