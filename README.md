<h1 align="center"><img src="docs/img/logo.png" width="28" alt="ChzzkDownloader Logo"> 치지직 다운로더 (ChzzkDownloader)</h1>

<p align="center">
  <a href="https://github.com/deuxdoom/ChzzkDownloader/releases"><img src="https://img.shields.io/github/downloads/deuxdoom/ChzzkDownloader/total?style=flat&logo=github&logoColor=white&label=DOWNLOADS&labelColor=2f353a&color=2ea44f" alt="총 다운로드 수"></a>
  <img src="https://img.shields.io/badge/PLATFORM-WINDOWS%20X64-0078d4?style=flat&logo=windows&logoColor=white&labelColor=2f353a" alt="Platform">
  <a href="LICENSE"><img src="https://img.shields.io/badge/LICENSE-Proprietary-00b377?style=flat&labelColor=2f353a" alt="프로젝트 이용 조건"></a>
</p>

<p align="center">
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/PYTHON-3.14-3776ab?style=flat&logo=python&logoColor=white&labelColor=2f353a" alt="Python"></a>
  <a href="https://pypi.org/project/PySide6/"><img src="https://img.shields.io/badge/PYSIDE6-GUI-10b981?style=flat&logo=qt&logoColor=white&labelColor=2f353a" alt="PySide6"></a>
  <a href="https://github.com/yt-dlp/yt-dlp"><img src="https://img.shields.io/badge/MADE%20WITH-yt--dlp-f97316?style=flat&labelColor=2f353a" alt="Made with yt-dlp"></a>
  <a href="https://ffmpeg.org/"><img src="https://img.shields.io/badge/MADE%20WITH-FFmpeg-007808?style=flat&logo=ffmpeg&logoColor=white&labelColor=2f353a" alt="Made with FFmpeg"></a>
</p>

![ChzzkDownloader 다운로드 화면](docs/img/app-download.png)

<p align="center">
  <a href="https://deuxdoom.github.io/ChzzkDownloader/"><img src="https://img.shields.io/badge/%E2%86%97%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-0e6b4c?style=for-the-badge" alt="홈페이지"></a>
  <a href="https://github.com/deuxdoom/ChzzkDownloader/releases/latest"><img src="https://img.shields.io/github/v/release/deuxdoom/ChzzkDownloader?style=for-the-badge&label=%E2%86%93%20%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&labelColor=00a36c&color=00c389" alt="최신 버전 다운로드"></a>
</p>

---

<p align="center">
  <a href="#introduction"><img src="https://img.shields.io/badge/%EC%86%8C%EA%B0%9C-2f353a?style=flat-square" alt="소개"></a>
  <a href="#requirements"><img src="https://img.shields.io/badge/%EC%9A%94%EA%B5%AC%20%EC%82%AC%ED%95%AD-2f353a?style=flat-square" alt="요구 사항"></a>
  <a href="#features"><img src="https://img.shields.io/badge/%EC%A3%BC%EC%9A%94%20%EA%B8%B0%EB%8A%A5-2f353a?style=flat-square" alt="주요 기능"></a>
  <a href="#usage"><img src="https://img.shields.io/badge/%EC%82%AC%EC%9A%A9%20%EB%B0%A9%EB%B2%95-2f353a?style=flat-square" alt="사용 방법"></a>
  <a href="#screenshots"><img src="https://img.shields.io/badge/%ED%99%94%EB%A9%B4%20%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0-2f353a?style=flat-square" alt="화면 살펴보기"></a>
  <a href="#cautions"><img src="https://img.shields.io/badge/%EC%A3%BC%EC%9D%98%20%EC%82%AC%ED%95%AD-2f353a?style=flat-square" alt="주의 사항"></a>
  <a href="#backup"><img src="https://img.shields.io/badge/%EB%B0%B1%EC%97%85-2f353a?style=flat-square" alt="백업"></a>
  <a href="#license"><img src="https://img.shields.io/badge/%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4-2f353a?style=flat-square" alt="라이선스"></a>
</p>

---

<a id="introduction"></a>

<a id="-간단-소개"></a>

## 📌 소개

치지직·YouTube·인스타그램·TVer 등 여러 사이트의 영상 주소를 분석해 MP4로 저장하는 Windows용 범용 다운로더입니다.
주소를 붙여넣어 받거나, 즐겨찾는 치지직 채널에서 영상을 골라 받을 수 있습니다. 라이브 녹화와 치지직 다시보기 채팅 저장도 지원합니다.

<a id="requirements"></a>

<a id="-시스템-요구-사항"></a>

## 💻 시스템 요구 사항

- Windows 10 / 11 (x64)
- 인터넷 연결 — 필요한 영상 도구는 첫 실행에 자동으로 준비합니다.

<a id="features"></a>

<a id="-주요-기능"></a>

## ✨ 주요 기능

- **여러 영상 다운로드**: 주소 붙여넣기·끌어놓기로 추가하고, 여러 주소를 대기열에 넣어 동시에 받을 수 있습니다.
- **구간 저장·라이브 녹화**: 긴 영상에서 필요한 시간대만 받거나, 라이브 방송을 녹화하다 중지한 시점까지 저장할 수 있습니다.
- **치지직 채널 관리**: 즐겨찾기 채널의 다시보기·업로드·클립을 골라 받습니다. 받은 영상 표시, 새 영상 알림과 채널별 영상·채팅 자동 다운로드를 제공합니다.
- **치지직 채팅 보관**: 다시보기 채팅을 오프라인 HTML로 저장합니다. 검색과 사용자별 보기를 제공하며, 닉네임이 바뀌어도 같은 계정의 채팅을 모아 볼 수 있습니다.
- **이어받기·다운로드 기록**: 중단된 영상은 받은 부분부터 다시 받고, 완료·실패·취소 작업은 기록에서 확인합니다. 기록 목록을 정리해도 받은 영상·채팅 표시는 유지하며, 이미 받은 영상은 중복 여부를 알려 줍니다.
- **저장·변환 설정**: 저장 위치·파일 이름·채널별 폴더·화질·속도 제한을 정합니다. 원본 유지가 기본이며, 필요하면 CPU 또는 NVIDIA NVENC로 MP4 영상을 변환할 수 있습니다.
- **치지직 계정 연결**: 브라우저에서 내보낸 쿠키로 계정을 연결해 팔로잉 채널을 가져오고, 여러 계정의 즐겨찾기를 따로 관리합니다. 아이디·비밀번호 입력은 필요 없습니다.

프로그램·영상 도구의 업데이트는 **설정**에서 관리할 수 있습니다. 버전별 변경 내용은 [변경 기록](CHANGELOG.md)을 확인하세요.

<a id="usage"></a>

<a id="-사용-방법"></a>

## 🚀 빠른 시작

1. [최신 릴리스](https://github.com/deuxdoom/ChzzkDownloader/releases/latest)에서 ZIP을 내려받아 압축을 풀고, 폴더 안의 `ChzzkDownloader.exe`를 실행합니다.
2. 첫 실행의 영상 도구 준비가 끝날 때까지 기다립니다. 창 하단에서 진행 상황을 확인하고, **설정**에서 저장 위치와 다운로드 옵션을 정합니다.
3. 영상 주소를 붙여넣고 **다운로드**를 누릅니다. 여러 주소는 **다중 다운로드** 창에 한 줄씩 넣고, 채널에서 고르려면 **채널 즐겨찾기**를 엽니다.
4. 완료한 영상은 목록에서 더블클릭해 엽니다. 이전 작업은 **다운로드 기록**에서 확인하고, 복원된 대기 작업은 **대기열 계속**으로 시작합니다.

실행할 때 ‘Windows의 PC 보호’나 백신 경고가 보이면 [보안 경고 확인 방법](#security)을 먼저 읽어 주세요.

필요에 따라 다운로드 전에 다음 항목을 선택하세요.

- **구간만 받기**: 시작·끝을 입력합니다. 끝을 비우면 영상 끝까지 받으며, 한 번 주소를 추가하면 체크가 풀립니다. 채널 화면에서 고른 영상에는 적용되지 않습니다.
- **받을 내용**: 영상·채팅만·영상 + 채팅을 고릅니다. 영상 + 채팅에서 구간을 지정하면 영상만 자르고 채팅은 전체를 저장합니다.
- **라이브 녹화 중지**: 카드의 중지 버튼을 누르면 지금까지 녹화한 부분을 저장합니다.
- **치지직 CDN(베타)**: 라이브나 다시보기에서 일부 구간이 빠지면 **설정 → 저장 · 다운로드 → 치지직 CDN**에서 글로벌 CDN(Akamai)을 선택해 보세요. 변환 전·완료 다시보기 모두 지원하며, 새로 넣는 작업부터 적용됩니다. 속도는 느려질 수 있고, 클립은 제공된 CDN을 사용합니다.
- **새 영상 자동 다운로드**: **설정 → 프로그램 동작**에서 새 영상 확인을 켜고 간격과 자동 다운로드의 받을 내용을 고릅니다. 채널 화면에서 ‘새 영상 자동 다운로드’를 켠 채널에 적용하며, 영상·채팅 중 이미 받은 내용은 건너뜁니다.

### 치지직 계정 연결 (선택)

팔로잉 채널을 가져오거나 계정의 시청 권한이 필요한 영상을 받으려면 **설정 → 치지직 계정 → 쿠키 파일 가져오기**에서 연결합니다.

<details>
<summary>쿠키 파일 저장·연결 방법 보기</summary>

1. 평소 치지직을 보는 브라우저에 [Get cookies.txt LOCALLY](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc)를 설치합니다.
2. 치지직에 로그인한 뒤 메인 화면 `https://chzzk.naver.com/`을 엽니다.
3. 주소창 옆 확장 프로그램 아이콘을 누릅니다. 표시된 주소가 치지직인지 확인하고 **왼쪽 첫 번째 Export 버튼**을 누릅니다.

![치지직 메인 화면에서 확장 프로그램을 열고 왼쪽 첫 번째 Export를 누르는 화면](docs/img/chzzk-cookie-export.png)

4. 기본 파일명 `chzzk.naver.com_cookies.txt`로 저장된 위치를 확인합니다.
5. 앱의 **쿠키 파일 가져오기**에서 저장에 동의하고, **파일 선택 → 가져오고 연결** 순서로 진행합니다.

연결하면 팔로잉 채널을 즐겨찾기에 추가합니다. 여러 계정을 연결한 경우 사이드바의 프로필 사진·이름에서 계정을 전환할 수 있으며, 즐겨찾기와 순서는 계정별로 유지됩니다.

</details>

<a id="screenshots"></a>

<a id="화면-살펴보기"></a>

## 📸 화면

아래 이미지는 **1.0.9 배포 EXE**에서 캡처했습니다. 영상 목록은 공개 정보이며, 작업 상태·저장 배지·알림·제한 상태·계정 이름과 사진은 소개용 예시입니다. 실제 다운로드·녹화·계정 인증 결과를 뜻하지 않습니다.

| 저장·다운로드 설정 | 채널 영상 선택 |
| --- | --- |
| ![저장 위치·파일 이름·화질·속도 제한 설정](docs/img/app-settings.png) | ![채널의 영상 보기·정렬·선택과 저장 배지](docs/img/app-channel.png) |

| 라이브 녹화 | 치지직 계정 전환 |
| --- | --- |
| ![라이브 녹화 크기·경과 시간·남은 공간 안내 예시](docs/img/app-live.png) | ![사이드바 프로필에서 연 저장된 계정 메뉴 예시](docs/img/app-account.png) |

<a id="cautions"></a>

<a id="-주의-사항"></a>

## ⚠️ 알아 두세요

- **계정 권한**: 19세 영상은 본인·성인 인증된 네이버 계정이, 구독자 전용 영상은 해당 계정의 시청 권한이 필요합니다.
- **쿠키 보관**: **로그인 쿠키는 내 PC에만 암호화 저장하며, 개발자나 별도 수집 서버로 전송하지 않습니다.** 저장 정보는 Windows 사용자 계정에 묶이며, 인증에 필요한 쿠키는 네이버·치지직에 전달됩니다. 앱은 아이디·비밀번호를 입력받거나 저장하지 않으며, 쿠키가 만료되면 다시 가져와야 합니다.
- **연결 해제·쿠키 파일**: 로그아웃이나 저장 정보 삭제는 현재 계정의 쿠키만 지우고 즐겨찾기·영상을 유지합니다. 가져온 파일에서는 `NID_AUT`·`NID_SES` 두 쿠키만 골라 저장합니다. 원래 쿠키 파일은 암호화되지 않고 앱이 수정·삭제하지 않으므로, 연결 후 필요 없는 쿠키 파일은 직접 삭제하세요.
- **TVer**: 일본 VPN에 연결한 뒤 다운로드를 시작하고, 완료될 때까지 연결을 유지해야 합니다.
- **채팅·구간 저장**: 채팅은 치지직 다시보기만 지원합니다. 구간 영상은 재인코딩 없이 잘라 앞뒤로 몇 초 차이가 날 수 있고 이어받기를 지원하지 않습니다. 속도 제한은 라이브·구간 다운로드에 적용되지 않을 수 있습니다.
- **라이브 저장 공간**: 충분한 여유 공간을 확보하세요. 치지직 1080p60은 시간당 약 3.8GB, 10시간이면 약 38GB가 필요하며 MP4로 정리할 때 같은 크기의 공간이 잠시 더 필요합니다. 남은 공간이 1GB 아래로 줄면 녹화를 멈추고 저장하며, 정리 공간이 부족하면 `.ts`로 남습니다. 녹화는 주소를 넣은 시점부터 시작하므로 방송 전체가 필요하면 종료 후 다시보기를 받으세요.
- 받은 영상은 개인 소장 용도로만 사용하고 저작권과 플랫폼 이용 약관을 지켜 주세요. 이 프로그램은 NAVER·치지직의 공식 프로그램이 아닙니다.

<a id="security"></a>

### 실행 경고·트로이목마 탐지 안내

현재 배포하는 `ChzzkDownloader.exe`에는 **개발자 신원을 확인하는 코드 서명이 없습니다.** Windows에서 ‘알 수 없는 게시자’로 표시되거나, 다운로드·실행 이력이 충분하지 않아 SmartScreen 경고가 나올 수 있습니다. **서명이 없다는 사실만으로 트로이목마가 들어 있다는 뜻은 아닙니다.** 다만 실제 백신 탐지까지 모두 서명 때문이라고 단정할 수는 없으므로, 표시된 문구를 구분해 확인해 주세요.

<details>
<summary>경고별 의미와 공식 파일 확인·신고 방법 보기</summary>

**코드 서명이란?** 파일을 누가 배포했는지, 서명한 뒤 바뀌지 않았는지 확인하는 전자 서명입니다([Microsoft 코드 서명 안내](https://learn.microsoft.com/en-us/windows-hardware/drivers/install/authenticode)). 악성코드 검사나 안전 보증서와는 다릅니다. SmartScreen은 파일·서명의 평판도 살펴보므로, 새 파일이나 널리 알려지지 않은 프로그램에 주의 경고를 표시할 수 있습니다. [Microsoft의 SmartScreen 설명](https://learn.microsoft.com/en-us/windows/security/operating-system-security/virus-and-threat-protection/microsoft-defender-smartscreen/)에서 동작 원리를 확인할 수 있습니다.

| 보이는 문구·상황 | 의미와 확인 방법 |
| --- | --- |
| ‘알 수 없는 게시자’, ‘Windows의 PC 보호’, ‘인식할 수 없는 앱’ | 게시자나 실행 평판을 충분히 확인하지 못했을 때도 나오는 경고입니다. 이 문구만으로 특정 트로이목마가 검출됐다고 판단하지 마세요. 다운로드 출처와 파일을 확인하세요. |
| Windows 보안·백신에 `Trojan:Win32/…` 같은 탐지명 표시, 파일 격리·삭제 | 악성코드 검사 결과이므로 별도 확인이 필요합니다. 정상 파일을 잘못 탐지하는 ‘오탐’일 수도 있지만, 탐지명만 보고 오탐이라고 확정할 수는 없습니다. 실행·격리 해제를 보류하고 아래 방법으로 신고해 주세요. |

**처음 받았다면 다음 순서로 확인하세요.**

1. [공식 GitHub 릴리스](https://github.com/deuxdoom/ChzzkDownloader/releases/latest)에서 받은 ZIP인지 확인하세요. 메신저 첨부·재업로드 파일 대신 공식 배포 파일을 이용하세요.
2. 내려받은 **ZIP 원본**의 SHA-256을 해당 버전 릴리스의 ‘파일 검증’ 값과 비교하세요. 파일이 든 폴더의 빈 곳에서 우클릭해 터미널 또는 PowerShell을 열고 아래 명령을 실행합니다. 파일명은 받은 버전에 맞춰 바꾸세요.

   ```powershell
   Get-FileHash -LiteralPath ".\ChzzkDownloader_v109.zip" -Algorithm SHA256
   ```

   출력의 `Hash`가 릴리스에 적힌 값과 같아야 합니다. 대소문자는 상관없습니다. ZIP의 해시를 EXE의 해시와 비교하면 일치하지 않습니다. 해시가 다르면 실행하지 말고 공식 파일을 다시 받으세요. 일치는 배포 파일과 같다는 확인이며, 악성코드가 없다는 별도 인증은 아닙니다. 명령 설명은 [Microsoft Get-FileHash 안내](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-5.1)를 참고하세요.
3. 백신이 실제로 탐지했다면 Windows 보안의 **바이러스 및 위협 방지 → 보호 기록** 또는 사용 중인 백신의 탐지 기록에서 탐지명·파일명·프로그램 버전을 확인해 [GitHub Issues](https://github.com/deuxdoom/ChzzkDownloader/issues)에 알려 주세요. 쿠키·계정 파일·개인 경로는 올리지 마세요.
4. Microsoft Defender의 오탐이 의심되면 [Microsoft 파일 분석 접수](https://www.microsoft.com/en-us/wdsi/filesubmission)에 해당 배포 파일을 제출해 재검토를 요청할 수 있습니다. 다른 백신은 해당 제조사의 오탐 신고 창구를 이용하세요. 제출은 해당 보안 업체에 파일을 전송하는 절차이며, 계정·설정 파일은 포함하지 마세요.

백신을 끄거나 프로그램 폴더 전체를 검사 예외로 등록할 필요는 없습니다. 탐지 원인과 검토 결과가 확인되기 전에는 실행·복원을 보류해 주세요.

</details>

<a id="backup"></a>

<a id="-백업할-파일"></a>

## 💾 설정 및 백업

프로그램 폴더의 다음 항목을 백업하면 설정·기록·즐겨찾기를 유지할 수 있습니다. 프로그램 업데이트는 이 항목들을 보존합니다.

- `settings.json`, `history.json`: 설정·다운로드 기록
- `favorites.json`, `favorites-profiles\`: 공용·계정별 즐겨찾기
- `download-index.json`, `channel-watch.json`: 받은 영상 표시·새 영상 확인 상태

이어받을 영상은 **원래 저장 위치의 `.incomplete\` 폴더**와 기록을 함께 보관하세요. `thumbnail-cache\`는 미리보기 캐시이므로 백업하지 않아도 됩니다.
로그인 정보인 `.auth\naver-session.dat`는 같은 Windows 계정에서만 사용할 수 있으며, 다른 PC·Windows 계정에서는 쿠키를 다시 가져와야 합니다. `.auth\runtime\`의 임시 쿠키는 백업하지 마세요.

<a id="license"></a>

<a id="-라이선스"></a>

## 📜 라이선스 및 저작권

**Copyright © 2026 SAKURA. All rights reserved.**

프로그램과 자체 제작 자료는 **개인의 비상업적 이용만 허용**합니다. 사전 허락 없는 상업적 이용이나 무단 재배포(수정본 포함)는 금지합니다. 자세한 조건은 [LICENSE](LICENSE)를 확인하세요.
이 저장소는 배포·소개용이며 프로그램 소스 코드는 공개하지 않습니다. 소개할 때는 공식 홈페이지나 릴리스 링크를 공유해 주세요.

FFmpeg·yt-dlp·PySide6·Pretendard·JetBrains Mono·Fluent UI System Icons·Octicons 등 외부 구성 요소에는 각각의 라이선스가 적용되며, 프로젝트의 이용 제한은 해당 라이선스가 부여하는 권리를 제한하지 않습니다.

<a id="support"></a>

문의·제안은 [GitHub Issues](https://github.com/deuxdoom/ChzzkDownloader/issues), 버전별 내역은 [변경 기록](CHANGELOG.md)·[전체 릴리스](https://github.com/deuxdoom/ChzzkDownloader/releases)에서 확인하세요.
