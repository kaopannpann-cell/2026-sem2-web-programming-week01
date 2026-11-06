import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      {/* TODO 1: แก้ข้อความ 2 บรรทัดด้านล่างนี้เป็นของคุณ แล้วดูหน้าเว็บเปลี่ยนทันที */}
      <Typography variant="h4">สมชาย ใจดี</Typography>
      <Typography variant="body1">นักเรียน ม.5 กำลังเรียนทำเว็บ</Typography>
      <Typography variant="body2">ฉันชอบสร้างเว็บที่ใช้งานง่ายและสวยงาม</Typography>

      
      
    {/* TODO 2: ทำนายก่อนว่าหน้าตาปุ่มจะเปลี่ยนเป็นอย่างไร แล้วลองเปลี่ยน variant เป็น "outlined" และ "text" */}
      <Stack direction="column" spacing={1}> 
      <Stack direction="row" spacing={2}>
        <Chip label="react" />
        <Chip label="typescript" color="primary" />
        <Chip label="mui" />        
      </Stack>
      <Stack direction="row" spacing={1}>
      <Stack direction="row" spacing={1}>
          <Button variant="contained">กดฉันสิ</Button>
          <Button variant="outlined">press</Button> 
        </Stack>
         </Stack>
          </Stack>
      {/* TODO 3: ดูภาพ target.png แล้วสร้างหน้าให้เหมือนภาพ
          ใช้ Typography, Stack, Chip, Button (import เพิ่มด้านบนเหมือนบรรทัดแรก)
          ลบ h1, p และปุ่มด้านบนทิ้งได้ ไม่ต้องใช้แล้ว
          ไม่รู้ว่าต้องใส่ค่า prop อะไร ให้เปิดหน้าเอกสาร mui.com/material-ui ของ component นั้น */}
          <Stack direction="column" spacing={1}>
            <Typography variant="h4"> ข้าวกระเพราไก่</Typography>
            <Typography variant="body1"> เผ็ดกลาง เพิ่มไข่ดาวได้</Typography>
              <Stack direction="row" spacing={2}>
                <Chip label="45 บาท" color="primary" />
                <Chip label="ขายดี" color="secondary" />
            </Stack>
          </Stack>






          <Stack direction="row" spacing={1} sx={{ maxWidth: 520, justifyContent: 'space-between', alignItems: 'center' }}>
            <Stack direction="column" spacing={1}>
              <Typography variant="body1"> ส่งสไลด์โครงงาน </Typography>
              <Typography variant="body2"> ภายในวันศุกร์ </Typography>
            </Stack>
              <Stack direction="row" spacing={1}>
                <Chip label="ด่วน" color="primary" variant="outlined" />
                <Button variant="contained">เสร็จแล้ว</Button>
                </Stack>
          </Stack>





          <Stack direction="column" spacing={2} >
            <Stack direction="row" spacing={2} sx={{ maxWidth: 520, justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5">ค่ายหุ่ยนต์ปิดเทอม</Typography>
              <Chip label="เปิดรับสมัคร" color="primary" />
            </Stack>
            <Typography variant="body1">ฝึกต่อวงจรและเขียนโปรแกรมควบคุมหุ่นยนต์ 3 วัน</Typography>
            <Stack direction="row" spacing={2} sx={{ maxWidth: 520, justifyContent: 'space-between', alignItems: 'center' }}>
             <Typography variant="body1">รับ 30 คน</Typography>
              <Button variant="contained" color="primary">สมัครเลย</Button>
            </Stack>
          </Stack>
          

        <Stack direction="column">
          <Typography variant="h6">ตะกร้าของฉัน</Typography>
          <Stack direction="row" spacing={1} sx={{ maxWidth: 520, justifyContent: 'space-between', alignItems: 'center' }}>
            <Stack direction="column" spacing={1} sx={{ maxWidth: 520, justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body1">ชาไทยเย็น</Typography>
              <Typography variant="body1">หวานน้อย</Typography>
            </Stack>
            <Typography variant="body1">35 บาท</Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ maxWidth: 520, justifyContent: 'space-between', alignItems: 'center' }}>
            <Stack direction="column" spacing={1} sx={{ maxWidth: 520, justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body1">ขนมปังปิ้ง</Typography>
              <Typography variant="body1">เนยน้ำตาล</Typography>
            </Stack>
            <Typography variant="body1">35 บาท</Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ maxWidth: 520, justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="body1">รวม 60 บาท</Typography>
              <Button variant="contained" color="primary">สั่งซื้อ</Button>
            </Stack>
        </Stack>
    </div>
  )
}
