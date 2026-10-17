import http.client
import json
import base64

def get_mcp_screenshot(node_id, output_path):
    conn = http.client.HTTPConnection('127.0.0.1', 3845)
    
    # 1. Initialize
    init_payload = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "initialize",
        "params": {
            "protocolVersion": "2024-11-05",
            "capabilities": {},
            "clientInfo": {"name": "test", "version": "1.0"}
        }
    }
    conn.request('POST', '/mcp', json.dumps(init_payload), {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream'
    })
    res = conn.getresponse()
    init_data = res.read().decode('utf-8')
    # Get session header if any
    headers = dict(res.getheaders())
    session_id = headers.get('mcp-session-id')
    print("Init response:", res.status, "session:", session_id)
    
    # 2. Call tool
    tool_payload = {
        "jsonrpc": "2.0",
        "id": 2,
        "method": "tools/call",
        "params": {
            "name": "get_screenshot",
            "arguments": {
                "nodeId": node_id,
                "contentsOnly": True
            }
        }
    }
    req_headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream'
    }
    if session_id:
        req_headers['mcp-session-id'] = session_id
    conn.request('POST', '/mcp', json.dumps(tool_payload), req_headers)
    res = conn.getresponse()
    raw = res.read().decode('utf-8')
    print(f"Tool call response status {res.status}, length: {len(raw)}")

    
    # Check SSE or JSON
    for line in raw.split('\n'):
        if line.startswith('data:'):
            data_str = line[5:].strip()
            resp = json.loads(data_str)
            for item in resp.get('result', {}).get('content', []):
                if item.get('type') == 'image':
                    b64_data = item.get('data')
                    img_bytes = base64.b64decode(b64_data)
                    with open(output_path, 'wb') as f:
                        f.write(img_bytes)
                    print(f"Successfully saved {output_path} ({len(img_bytes)} bytes)!")
                    return True
        elif line.startswith('{'):
            resp = json.loads(line)
            for item in resp.get('result', {}).get('content', []):
                if item.get('type') == 'image':
                    b64_data = item.get('data')
                    img_bytes = base64.b64decode(b64_data)
                    with open(output_path, 'wb') as f:
                        f.write(img_bytes)
                    print(f"Successfully saved {output_path} ({len(img_bytes)} bytes)!")
                    return True
    return False

print("11:37 (Name Tag):", get_mcp_screenshot("11:37", "d:/portofolio-othmar/public/assets/figma/name_tag_sticker.png"))
print("11:38 (Green Kid):", get_mcp_screenshot("11:38", "d:/portofolio-othmar/public/assets/figma/green_kid_sticker.png"))
