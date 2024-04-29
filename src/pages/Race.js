// pages/Race.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import RaceList from '../components/RaceList'; // Import RaceList
import './Race.css'; // Import the CSS file
//import './Race.css'; // Import the CSS file

function Race() {
  const { race } = useParams();

  return (
    <div>
      <RaceList /> {/* Include the race list */}
      {/* Fighter table */}
      <table className="class-table">
        <tr>
        <th colspan="6"><Link to={`/skills/${race}`}>{race}ファイター</Link></th>
        </tr>
        {race === 'ヒューマン' && (
          <>
            <tr>
              <td colspan="2"><Link to={`/skills/${race}/Rogue`}>ローグ</Link></td>
              <td colspan="2"><Link to={`/skills/${race}/Warrior`}>ウォーリア</Link></td>
              <td colspan="2"><Link to={`/skills/${race}/Human Knight`}>ナイト</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Treasure Hunter`}>トレジャー ハンター</Link></td>
              <td><Link to={`/skills/${race}/Hawkeye`}>ホークアイ</Link></td>
              <td><Link to={`/skills/${race}/Gladiator`}>グラディエーター</Link></td>
              <td><Link to={`/skills/${race}/Warlord`}>ウォーロード</Link></td>
              <td><Link to={`/skills/${race}/Paladin`}>パラディン</Link></td>
              <td><Link to={`/skills/${race}/Dark Avenger`}>ダーク アベンジャー</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Adventurer`}>アドベンチャラー</Link></td>
              <td><Link to={`/skills/${race}/Sagittarius`}>サジタリウス</Link></td>
              <td><Link to={`/skills/${race}/Duelist`}>デュエリスト</Link></td>
              <td><Link to={`/skills/${race}/Dreadnought`}>ドレッドノート</Link></td>
              <td><Link to={`/skills/${race}/Pheonix Knight`}>Pheonix Knight</Link></td>
              <td><Link to={`/skills/${race}/Hell Knight`}>ヘル ナイト</Link></td>
            </tr>
          </>
        )}
        {race === 'エルフ' && (
          <>
            <tr>
              <td colspan="2"><Link to={`/skills/${race}/Elven Knight`}>エルヴン ナイト</Link></td>
              <td colspan="2"><Link to={`/skills/${race}/Elven Scout`}>エルヴン スカウト</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Temple Knight`}>テンプル ナイト</Link></td>
              <td><Link to={`/skills/${race}/Swordsinger`}>ソードシンガー</Link></td>
              <td><Link to={`/skills/${race}/Plainswalker`}>プレインズウォーカー</Link></td>
              <td><Link to={`/skills/${race}/Silver Ranger`}>シルバー レンジャー</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Evas Templar`}>エヴァス テンプラー</Link></td>
              <td><Link to={`/skills/${race}/Sword Muse`}>ソード ミューズ</Link></td>
              <td><Link to={`/skills/${race}/Wind Rider`}>ウィンド ライダー</Link></td>
              <td><Link to={`/skills/${race}/Moonlight Sentinel`}>ムーンライト センティネル</Link></td>
            </tr>
          </>
        )}
        {race === 'ダークエルフ' && (
          <>
            <tr>
              <td colspan="2"><Link to={`/skills/${race}/Palus Knight`}>パラス ナイト</Link></td>
              <td colspan="2"><Link to={`/skills/${race}/Assassin`}>アサシン</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Shillien Knight`}>シリエン ナイト</Link></td>
              <td><Link to={`/skills/${race}/Bladedancer`}>ブレードダンサー</Link></td>
              <td><Link to={`/skills/${race}/Abyss Walker`}>アビス ウォーカー</Link></td>
              <td><Link to={`/skills/${race}/Phantom Ranger`}>ファントム レンジャー</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Shillien Templar`}>シリエン テンプラー</Link></td>
              <td><Link to={`/skills/${race}/Spectral Dancer`}>スペクトラル ダンサー</Link></td>
              <td><Link to={`/skills/${race}/Ghost Hunter`}>ゴースト ハンター</Link></td>
              <td><Link to={`/skills/${race}/Ghost Sentinel`}>ゴースト センティネル</Link></td>
            </tr>
          </>
        )}
        {race === 'オーク' && (
          <>
            <tr>
              <td colspan="1"><Link to={`/skills/${race}/Orc Raider`}>オーク レイダー</Link></td>
              <td colspan="1"><Link to={`/skills/${race}/Monk`}>オーク モンク</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Destroyer`}>デストロイヤー</Link></td>
              <td><Link to={`/skills/${race}/Tyrant`}>タイラント</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Titan`}>タイタン</Link></td>
              <td><Link to={`/skills/${race}/Grand Khavatari`}>グランド カバタリ</Link></td>
            </tr>
          </>
        )}
        {race === 'ドワーフ' && (
          <>
            <tr>
              <td colspan="1"><Link to={`/skills/${race}/Scavenger`}>スカベンジャー</Link></td>
              <td colspan="1"><Link to={`/skills/${race}/Artisan`}>アルティザン</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Bounty Hunter`}>バウンティー ハンター</Link></td>
              <td><Link to={`/skills/${race}/Warsmith`}>ウォースミス</Link></td>
            </tr>
            <tr>
              <td><Link to={`/skills/${race}/Fortune Seeker`}>フォーチュン シーカー</Link></td>
              <td><Link to={`/skills/${race}/Maestro`}>マエストロ</Link></td>
            </tr>
          </>
        )}
        {race === 'カマエル' && (
          <>
            <tr>
              <td colspan="2">Trooper</td>
            </tr>
            <tr>
              <td>Berserker</td>
              <td>Male Soulbreaker</td>
            </tr>
            <tr>
              <td>Doombringer</td>
              <td>Male Soulhound</td>
            </tr>
          </>
        )}
        {/* Your table rows for Fighter here */}
      </table>
      {/* Mystic table (if applicable) */}
      {race !== 'ドワーフ' && (
        <table className="class-table">
          <tr>
            <th colspan="6"><Link to={`/skills/${race}`}>{race}メイジ</Link></th>
          </tr>
          {race === 'ヒューマン' && (
            <>
              <tr>
                <td colspan="3"><Link to={`/skills/${race}/Human Wizard`}>ウィザード</Link></td>
                <td colspan="3"><Link to={`/skills/${race}/Cleric`}>クレリック</Link></td>
              </tr>
              <tr>
                <td><Link to={`/skills/${race}/Sorcerer/SS`}>ソーサラー</Link></td>
                <td><Link to={`/skills/${race}/Necromancer`}>ネクロマンサー</Link></td>
                <td><Link to={`/skills/${race}/Warlock`}>ウォーロック</Link></td>
                <td><Link to={`/skills/${race}/Bishop`}>ビショップ</Link></td>
                <td><Link to={`/skills/${race}/Prophet`}>プロフィット</Link></td>
              </tr>
              <tr>
                <td><Link to={`/skills/${race}/Archmage`}>アークメイジ</Link></td>
                <td><Link to={`/skills/${race}/Soultaker`}>ソウルテイカー</Link></td>
                <td><Link to={`/skills/${race}/Arcana Lord`}>アルカナ ロード</Link></td>
                <td><Link to={`/skills/${race}/Cardinal`}>カーディナル</Link></td>
                <td><Link to={`/skills/${race}/Hierophant`}>ハイエロファント</Link></td>
              </tr>
            </>
          )}
          {race === 'エルフ' && (
            <>
              <tr>
                <td colspan="2"><Link to={`/skills/${race}/Elven Wizard`}>エルヴン ウィザード</Link></td>
                <td colspan="1"><Link to={`/skills/${race}/Elven Oracle`}>オラクル</Link></td>
              </tr>
              <tr>
                <td><Link to={`/skills/${race}/Spellsinger`}>スペルシンガー</Link></td>
                <td><Link to={`/skills/${race}/Elemental Summoner`}>エレメンタル サマナー</Link></td>
                <td><Link to={`/skills/${race}/Elven Elder`}>エルダー</Link></td>
              </tr>
              <tr>
                <td><Link to={`/skills/${race}/Mystic Muse`}>ミスティック ミューズ</Link></td>
                <td><Link to={`/skills/${race}/Elemental Master`}>エレメンタル マスター</Link></td>
                <td><Link to={`/skills/${race}/Evas Saint`}>Evas Saint</Link></td>
              </tr>
            </>
          )}
          {race === 'ダークエルフ' && (
            <>
              <tr>
                <td colspan="2"><Link to={`/skills/${race}/Dark Wizard`}>ダーク ウィザード</Link></td>
                <td colspan="1"><Link to={`/skills/${race}/Shillien Oracle`}>シリエン オラクル</Link></td>
              </tr>
              <tr>
                <td><Link to={`/skills/${race}/Spellhowler`}>スペルハウラー</Link></td>
                <td><Link to={`/skills/${race}/Phantom Summoner`}>ファントム サマナー</Link></td>
                <td><Link to={`/skills/${race}/Shillien Elder`}>シリエン エルダー</Link></td>
              </tr>
              <tr>
                <td><Link to={`/skills/${race}/Storm Screamer`}>ストーム スクリーマー</Link></td>
                <td><Link to={`/skills/${race}/Spectral Master`}>スペクトラル マスター</Link></td>
                <td><Link to={`/skills/${race}/Shillien Saint`}>シリエン セイント</Link></td>
              </tr>
            </>
          )}
          {race === 'オーク' && (
            <>
              <tr>
                <td colspan="2"><Link to={`/skills/${race}/Orc Shaman`}>オーク シャーマン</Link></td>
              </tr>
              <tr>
                <td><Link to={`/skills/${race}/Overlord`}>オーバーロード</Link></td>
                <td><Link to={`/skills/${race}/Warcryer`}>ウォークライヤー</Link></td>
              </tr>
              <tr>
                <td><Link to={`/skills/${race}/Dominator`}>ドミネーター</Link></td>
                <td><Link to={`/skills/${race}/Doomcryer`}>ドゥームクライヤー</Link></td>
              </tr>
            </>
          )}
          {race === 'カマエル' && (
            <>
              <tr>
                <td colspan="2">Warder</td>
              </tr>
              <tr>
                <td>Female Soulbreaker</td>
                <td>Arbalester</td>
              </tr>
              <tr>
                <td>Female Soulhound</td>
                <td>Trickster</td>
              </tr>
            </>
          )}
          {/* Your table rows for Mystic here */}
        </table>
      )}
    </div>
  );
}

export default Race;