import { useSelector } from "react-redux";
import { playersSelector } from "../slices/players";
import { useRouter } from "next/router";

export default function PlayerSelector() {
  const router = useRouter();
  //get playersData from the store
  const { players, loading, hasErrors } = useSelector(playersSelector);

  //when selctor option change update router
  // so the <Player/> component will make an async call to get the user details
  const handleSelect = (e) => {
    if (e.target.value !== "") {
      router.push(`${router.pathname}?id=${e.target.value}`, undefined, {
        shallow: true,
      });
    }
  };

  if (loading) return <p>Loading players...</p>;
  if (hasErrors) return <p>Unable to load players.</p>;

  return (
    <>
      <label htmlFor="players" className="pad5">
        Select player:
      </label>
      <select
        name="players"
        className="text-white pad5"
        onChange={(e) => handleSelect(e)}
        value={
          router.query.id !== undefined
            ? router.query.id
            : players
            ? players[0]?.uuid
            : ""
        }
      >
        {players?.map((item, idx) => (
          <option key={idx} value={item.uuid}>
            {`${item.givenName} ${item.familyName}`}
          </option>
        ))}
      </select>
    </>
  );
}
