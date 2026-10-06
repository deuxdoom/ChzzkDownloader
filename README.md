<h1 align="center"><img src="docs/img/logo.png" width="28" alt="ChzzkDownloader Logo"> 치지직 다운로더 (ChzzkDownloader)</h1>

<p align="center">
  <img src="https://img.shields.io/badge/PLATFORM-WINDOWS%20X64-0078d4?style=flat&logo=windows&logoColor=white&labelColor=2f353a" alt="Platform">
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/PYTHON-3.14-3776ab?style=flat&logo=python&logoColor=white&labelColor=2f353a" alt="Python"></a>
  <a href="https://pypi.org/project/PySide6/"><img src="https://img.shields.io/badge/PYSIDE6-GUI-10b981?style=flat&logo=qt&logoColor=white&labelColor=2f353a" alt="PySide6"></a>
  <a href="https://github.com/yt-dlp/yt-dlp"><img src="https://img.shields.io/badge/MADE%20WITH-yt--dlp-f97316?style=flat&labelColor=2f353a" alt="Made with yt-dlp"></a>
  <a href="https://ffmpeg.org/"><img src="https://img.shields.io/badge/MADE%20WITH-FFmpeg-007808?style=flat&logo=ffmpeg&logoColor=white&labelColor=2f353a" alt="Made with FFmpeg"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/LICENSE-Proprietary-00b377?style=flat&labelColor=2f353a" alt="프로젝트 이용 조건"></a>
</p>

![ChzzkDownloader 다운로드 화면](docs/img/app-download.png)

<p align="center">
  <a href="https://deuxdoom.github.io/ChzzkDownloader/"><img src="https://img.shields.io/badge/%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80-00b377?style=for-the-badge" alt="홈페이지"></a>
  <a href="https://github.com/deuxdoom/ChzzkDownloader/releases/latest"><img src="https://img.shields.io/github/v/release/deuxdoom/ChzzkDownloader?style=for-the-badge&label=%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C&labelColor=2f353a&color=00b377" alt="최신 버전 다운로드"></a>
</p>

---

<p align="center">
  <a href="#introduction"><img src="https://img.shields.io/badge/%EC%86%8C%EA%B0%9C-2f353a?style=flat-square" alt="소개"></a>
  <a href="#requirements"><img src="https://img.shields.io/badge/%EC%9A%94%EA%B5%AC%20%EC%82%AC%ED%95%AD-2f353a?style=flat-square" alt="요구 사항"></a>
  <a href="#features"><img src="https://img.shields.io/badge/%EC%A3%BC%EC%9A%94%20%EA%B8%B0%EB%8A%A5-2f353a?style=flat-square" alt="주요 기능"></a>
  <a href="#usage"><img src="https://img.shields.io/badge/%EC%82%AC%EC%9A%A9%20%EB%B0%A9%EB%B2%95-2f353a?style=flat-square" alt="사용 방법"></a>
  <a href="#cautions"><img src="https://img.shields.io/badge/%EC%A3%BC%EC%9D%98%20%EC%82%AC%ED%95%AD-2f353a?style=flat-square" alt="주의 사항"></a>
  <a href="#backup"><img src="https://img.shields.io/badge/%EB%B0%B1%EC%97%85-2f353a?style=flat-square" alt="백업"></a>
  <a href="#license"><img src="https://img.shields.io/badge/%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4-2f353a?style=flat-square" alt="라이선스"></a>
</p>

---

<a id="introduction"></a>

## 📌 간단 소개

치지직 VOD·클립, YouTube, 인스타그램, TVer 등 여러 사이트의 영상 주소를 분석해 MP4로 저장하는 Windows 프로그램입니다.
주소를 붙여넣거나, 즐겨찾는 치지직 채널에서 영상을 골라 받습니다.
TVer는 일본 VPN에 연결한 상태에서 다운로드해야 합니다.

<a id="requirements"></a>

## 💻 시스템 요구 사항

- Windows 10 / 11 (x64)
- 인터넷 연결

<a id="features"></a>

## ✨ 주요 기능

- **다운로드**: 주소 붙여넣기·끌어놓기, ‘다중 다운로드’ 창에서 여러 주소를 한 줄씩 추가. 동시 영상 최대 4개·영상당 조각 최대 16개
- **저장 설정**: 설정 화면에서 저장 위치·최고 화질 또는 해상도 상한·인코딩을 선택하고 다음 실행에도 유지
- **완료 항목**: 이번 실행에서 완료한 영상은 다운로드 목록에서 재생하거나 더블클릭. ‘완료 항목 정리’로 숨겨도 기록과 영상은 유지
- **대기 목록 복원**: 취소·대기·종료 중단 작업은 다시 실행하면 대기 상태로 복원. ‘대기열 계속’을 누르면 이전 저장 위치와 다운로드 설정으로 시작
- **중복 다운로드 확인**: 완료 기록과 같은 영상 주소를 다시 넣으면 다시 다운로드할지 확인
- **채널 즐겨찾기**: 채널명이나 주소로 검색해 저장하고, 저장한 카드를 드래그해 순서 변경. 채널 VOD를 썸네일·제목·날짜 카드로 보며 골라 받기. 연령 제한 영상은 썸네일 오른쪽 위의 19세 배지로 구분
- **다운로드 기록**: 완료·실패·취소 작업을 따로 모아 다시 재생·재시도. 썸네일은 다시 열어도 유지
- **작업 로그**: 목록 상단의 로그 버튼으로 열고 닫기. 카드 선택이나 로그 필터로 원하는 작업만 확인하며 로그를 열어도 입력창·버튼·카드가 좌우로 밀리지 않음
- **MP4 저장·변환**: 원본 유지가 기본. 필요하면 CPU 또는 NVIDIA NVENC로 H.264(AVC)·H.265(HEVC) 변환. 변환이 실패하거나 취소돼도 원본 보존
- **트레이 실행**: 창을 닫아도 트레이에서 다운로드 계속, 대기열 일시정지·재개, 완료 알림
- **자동 업데이트**: GitHub 정식 릴리스의 추가·변경·수정 내역을 확인한 뒤 ‘지금 업데이트’·‘나중에’를 선택. 설치 시 SHA-256 검증 후 프로그램만 교체. 영상·기록·설정은 그대로. 설정에서 직접 확인했을 때 최신이면 안내창 표시
- **도구 업데이트**: 첫 실행에 FFmpeg·ffprobe와 yt-dlp nightly를 받고, 시작할 때마다 확인해 없거나 손상되었으면 자동으로 다시 준비. 모든 탭의 하단에서 상태·진행률을 확인하고, 완료 안내는 5초 뒤 서서히 사라짐. 설정의 ‘도구 업데이트’는 최신 도구를 다시 받지 않고 바뀌었거나 손상된 도구만 교체
- **화면과 버전 표시**: 화면 해상도와 Windows 배율에 맞춘 고정 창. 진행률·속도·버전에는 JetBrains Mono를 적용하고, 메인 창 오른쪽 아래의 흰색 GitHub 아이콘을 누르면 저장소로 이동

<a id="usage"></a>

## 🚀 사용 방법

1. 릴리스의 `.zip` 파일을 다운받아 압축을 풀고 `ChzzkDownloader.exe`를 실행합니다.
2. 첫 실행에는 인터넷으로 필요한 영상 도구(FFmpeg·ffprobe, yt-dlp nightly)를 자동으로 받습니다. **창 하단의 상태와 진행 표시**로 준비 상황을 확인하세요. 준비가 끝나면 사이드바 맨 아래 **설정**에서 저장·다운로드, 영상 변환, 프로그램 동작, 업데이트 항목을 정합니다.
3. 어떤 사이트의 영상 주소든 붙여넣고 **다운로드**를 누릅니다. 여러 영상을 한꺼번에 추가하고 싶을 경우 **다중 다운로드** 창에 한 줄씩 넣고 **다운로드 (개수)**를 누릅니다. 입력 순서대로 목록에 추가되며 설정한 동시 영상 수만큼 시작합니다.
4. 채널 단위로 고르려면 **채널 즐겨찾기**에서 채널을 검색 저장한 뒤 카드를 눌러 영상을 선택합니다. 
5. 다운이 완료된 영상은 **다운로드 목록**에서 바로 재생 가능합니다. 이전 실행의 작업·실패·취소 항목은 **다운로드 기록**에서 확인합니다.
6. 취소·대기·종료 중단 작업은 다음 실행에 대기로 복원됩니다. **대기열 계속**으로 재개하세요. 완료 기록과 같은 영상을 다시 추가하면 **다시 다운로드**할지 확인합니다.

### 화면 살펴보기

| 설정 | 채널 영상 |
| --- | --- |
| ![저장·다운로드, 영상 변환, 프로그램 동작, 업데이트로 구분한 설정](docs/img/app-settings.png) | ![썸네일로 영상을 고르는 채널 화면](docs/img/app-channel.png) |

| 도구 준비 | 연령 제한 표시 |
| --- | --- |
| ![메인 하단의 도구 다운로드 상태와 진행률](docs/img/app-tools.png) | ![썸네일 오른쪽 위의 19세 배지 예시](docs/img/app-channel-age.png) |

화면은 실제 1.0.2 UI이며 도구 진행률·영상 목록·연령 제한 표시는 소개용 예시입니다. 19세 배지는 제한 여부를 알려 주며 로그인 인증 기능을 제공하지 않습니다.

<a id="cautions"></a>

## ⚠ 주의 사항

- 공개 영상만 받을 수 있습니다. 연령 확인·구독자 전용 영상은 지원하지 않습니다.
- TVer 영상은 일본 VPN에 연결한 뒤 받아야 하며, 다운이 끝날 때까지 VPN 연결을 유지해야 합니다.
- 창 크기는 화면과 Windows 배율에 맞춰 자동으로 정해집니다. 직접 크기를 조절하거나 최대화할 수 없으며, 작은 화면에서는 카드와 설정 내용을 스크롤로 볼 수 있습니다.
- 받은 영상은 개인 소장 용도로만 사용하고, 저작권과 플랫폼 이용 약관을 지켜 주세요.
- 이 다운로더는 NAVER·치지직의 공식 프로그램이 아닙니다.

<a id="backup"></a>

## 💾 백업할 파일

EXE 옆의 `settings.json`(설정), `history.json`(다운로드 기록), `favorites.json`(채널 즐겨찾기)을 백업하세요. `thumbnail-cache\`는 지워도 다시 만들어집니다. 업데이트는 이 파일들을 바꾸지 않습니다.

<a id="license"></a>

## 📜 라이선스

본 저장소는 **ChzzkDownloader의 배포 및 소개를 위한 공간**입니다. 프로젝트 자체 소스 코드는 공개하지 않으며, 프로그램과 자체 제작 자료에는 [프로젝트 이용 조건](LICENSE)이 적용됩니다.

- **개인 이용**: 개인의 비상업적 용도로 사용할 수 있습니다.
- **상업적 이용 금지**: 제작자의 사전 허락 없이 판매·유료 서비스 제공 등 영리 목적으로 이용할 수 없습니다.
- **무단 재배포 금지**: 제작자의 사전 허락 없이 프로그램·배포 파일·자체 제작 자료를 재업로드하거나, 수정한 버전을 배포할 수 없습니다. 소개할 때는 공식 홈페이지나 릴리스 링크를 공유해 주세요.

사용하는 FFmpeg·yt-dlp(첫 실행 때 받음)·PySide6·Pretendard·JetBrains Mono·아이콘(Fluent UI System Icons, Octicons) 등 외부 구성요소에는 각각의 라이선스가 적용되며, 위 제한은 해당 라이선스가 부여하는 권리를 제한하지 않습니다.
