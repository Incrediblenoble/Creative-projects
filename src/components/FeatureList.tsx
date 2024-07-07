import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FeatureList.css";

export type FeatureListType = {
  className?: string;
  gameIconsspeaker?: string;
  crystalClearAudio?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FeatureList: FunctionComponent<FeatureListType> = ({
  className = "",
  gameIconsspeaker,
  crystalClearAudio,
  propFlex,
  propAlignSelf,
}) => {
  const featureListStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div className={`feature-list ${className}`} style={featureListStyle}>
      <div className="audio-feature">
        <div className="game-iconsspeaker-parent">
          <img className="game-iconsspeaker" alt="" src={gameIconsspeaker} />
          <div className="audio-description">
            <div className="crystal-clear-audio">{crystalClearAudio}</div>
          </div>
        </div>
      </div>
      <div className="feature-separator-one" />
    </div>
  );
};

export default FeatureList;
